const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function invokeGeminiAi(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        });

        return response.text;
    } catch (err) {
        console.error("Gemini Error:", err.message);
        throw err;
    }
}

const interviewReportSchema = z.object({
    matchScore: z
        .number()
        .describe(
            "A score between 0 & 100 indicating how well the candidate's profile matches the job description"
        ),

    technicalQuestions: z
        .array(
            z.object({
                question: z
                    .string()
                    .describe("The technical question can be asked in the interview"),

                intention: z
                    .string()
                    .describe("The intention of the interviewer behind asking this question"),

                answer: z
                    .string()
                    .describe(
                        "How to answer this question, what points to cover and what approach to take."
                    ),
            })
        )
        .describe(
            "Technical questions that can be asked in the interview along with their intentions and how to answer them."
        ),

    behavioralQuestions: z
        .array(
            z.object({
                question: z
                    .string()
                    .describe("The behavioral question that can be asked in the interview"),

                intention: z
                    .string()
                    .describe("The intention of the interviewer behind asking this question"),

                answer: z
                    .string()
                    .describe(
                        "How to answer this question, what points to cover and what approach to take."
                    ),
            })
        )
        .describe(
            "Behavioral questions that can be asked in the interview along with their intentions and how to answer them."
        ),

    skillGap: z
        .array(
            z.object({
                skill: z
                    .string()
                    .describe("The skill which the candidate is lacking"),

                severity: z
                    .enum(["low", "medium", "high"])
                    .describe(
                        "The severity of this skill gap."
                    ),
            })
        )
        .describe(
            "List of skill gaps in the candidate's profile along with their severity."
        ),

    preparationPlan: z
        .array(
            z.object({
                day: z
                    .number()
                    .describe(
                        "The day number in the preparation plan starting from 1."
                    ),

                focus: z
                    .string()
                    .describe(
                        "The main focus of the day in the preparation plan."
                    ),

                tasks: z
                    .array(
                        z.string()
                    )
                    .describe(
                        "List of tasks to be completed on this day."
                    ),
            })
        )
        .describe(
            "A day-wise preparation plan for the candidate."
        ),
});

async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription,
}) {
    try {
        const prompt = `
You are an expert technical interviewer.

Analyze the following candidate profile and generate a complete interview report.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Return ONLY valid JSON matching the provided schema.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: zodToJsonSchema(interviewReportSchema),
            },
        });

        const report = JSON.parse(response.text);

        console.log(report);

        return report;
    } catch (err) {
    console.error("Interview Report Error:", err);

    throw new Error(
        "AI service is temporarily unavailable. Please try again in a few minutes."
    );
}
}

module.exports = {
    invokeGeminiAi,
    generateInterviewReport,
};