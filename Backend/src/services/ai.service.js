const { GoogleGenAI } = require("@google/genai");

const {z}=require('zod')
const {zodToJsonSchema}=require('zod-to-json-schema')

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

const interviewReportSchema=z.object({
    technicalQuestions:z.array(z.object({
        question:z.string().description("The technical question can be asked in the interview"),
        intention:z.string().description("The intention of the interviewer behind asking this question "),
        anwer:z.string().description("how to anser this question , what points to cover , what approcah to take etc.")
    })).description("Behavioral questions that can be asked in the interview along with their intentions and how to answer them "),
     behavioralQuestions:z.array(z.object({
       question:z.string().description("The behavirol question can be asked in interview"),
        intention:z.string().description("The intention of the interviewer behind asking this question "),
        anwer:z.string().description("how to anser this question , what points to cover , what approcah to take etc.")
     })).description("Behavioral questions that can be asked in the interview along with their intentions and how to answer them "),
     skillGap:z.array(z.object({
        skill:z.string().description("The skill which teh candidate is lacking"),
        severity:z.array().description(["low","medium","high"]).description("The severity of this skill gap , i.e how important it is  ")
     })).description("List of skil gaps in the candidate's profile along with their severity"),
     preparationPlan:z.array(z.object({
        day:z.string().description("The day number in the preparation plan , start from 1"),
        focus:z.string().description("The main focus of thi sday int he preparation plan , e.g data structures , system design , mock interviews effectively "),
        tasks:z.string().description("List of task to be done ont his day to folow the preparation plan , e.g. read a specific book ")
     }))
})

async function generateIntervierviewReport({resume,selfDescription,jobDescription}) {
    
}

module.exports = invokeGeminiAi;