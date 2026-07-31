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
                    .describe("The intention of the interviewer behind asking this question "),

                answer: z
                    .string()
                    .describe(
                        "how to anser this question , what points to cover , what approcah to take etc."
                    ),
            })
        )
        .describe(
            "Behavioral questions that can be asked in the interview along with their intentions and how to answer them "
        ),

    behavioralQuestions: z
        .array(
            z.object({
                question: z
                    .string()
                    .describe("The behavirol question can be asked in interview"),

                intention: z
                    .string()
                    .describe("The intention of the interviewer behind asking this question "),

                answer: z
                    .string()
                    .describe(
                        "how to anser this question , what points to cover , what approcah to take etc."
                    ),
            })
        )
        .describe(
            "Behavioral questions that can be asked in the interview along with their intentions and how to answer them "
        ),

    skillGap: z
        .array(
            z.object({
                skill: z
                    .string()
                    .describe("The skill which teh candidate is lacking"),

                severity: z
                    .enum(["low", "medium", "high"])
                    .describe(
                        "The severity of this skill gap , i.e how important it is  "
                    ),
            })
        )
        .describe(
            "List of skil gaps in the candidate's profile along with their severity"
        ),

    preparationPlan: z
        .array(
            z.object({
                day: z
                    .number()
                    .describe(
                        "The day number in the preparation plan , start from 1"
                    ),

                focus: z
                    .string()
                    .describe(
                        "The main focus of thi sday int he preparation plan , e.g data structures , system design , mock interviews effectively "
                    ),

                tasks: z
                    .array(
                        z.string()
                    )
                    .describe(
                        "List of task to be done ont his day to folow the preparation plan , e.g. read a specific book or follow a particular roadmap"
                    ),
            })
        )
        .describe(
            "A say-wise preparation plan for the candidate to follow in oder to preapre dor the interview effectively "
        ),
});

async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription,
}) {
    const prompt = `Generate an interview report for a candidate with the following details :
Resume:${resume}
Self Description:${selfDescription}
Job Description:${jobDescription}
`;

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(interviewReportSchema),
        },
    });

    const report = (response.text);

    console.log(report);

    return report;
}

module.exports = {
    invokeGeminiAi,
    generateInterviewReport,
};