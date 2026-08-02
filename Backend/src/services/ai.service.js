const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function invokeGeminiAi(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
    });

    return response.text;
}

async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription,
}) {
    try {
        const prompt = `
You are an expert Technical Interviewer and Career Coach.

Analyze the candidate carefully.

Return ONLY valid JSON.

Do NOT return markdown.
Do NOT wrap JSON inside \`\`\`.
Do NOT explain anything.

The JSON format MUST be:

{
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],
  "behavioralQuestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],
  "skillGap": [
    {
      "skill": "",
      "severity": "low"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "",
      "tasks": [
        "",
        "",
        ""
      ]
    }
  ]
}

Rules:

- matchScore must be between 0 and 100.
- Generate exactly 5 technical questions.
- Generate exactly 5 behavioral questions.
- Generate exactly 5 skill gaps.
- Generate a preparation plan for 7 days.
- Every day's tasks should contain 3 items.
- Never return empty arrays.
- Every answer should be detailed.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        });

        console.log("========== RAW GEMINI RESPONSE ==========");
        console.log(response.text);

        const report = JSON.parse(response.text);

        console.log("========== PARSED REPORT ==========");
        console.log(report);

        return report;
    } catch (err) {
        console.error("Interview Report Error:", err);
        throw new Error("Failed to generate interview report.");
    }
}

module.exports = {
    invokeGeminiAi,
    generateInterviewReport,
};