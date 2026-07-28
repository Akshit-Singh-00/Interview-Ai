require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/database");

// Import functions from ai.service.js
const {
    invokeGeminiAi,
    generateInterviewReport,
} = require("./src/services/ai.service");

// Import sample data
const {
    resume,
    selfDescription,
    jobDescription,
} = require("./src/services/ai.service"); // <-- change this to wherever your data file is

connectDB();

(async () => {
    try {
        // Generate interview report
        const report = await generateInterviewReport({
            resume,
            selfDescription,
            jobDescription,
        });

        console.log(report);

        // Test Gemini
        const result = await invokeGeminiAi(
            "Hello Gemini! Explain what an interview is."
        );

        console.log(result);
    } catch (err) {
        console.error(err);
    }
})();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});