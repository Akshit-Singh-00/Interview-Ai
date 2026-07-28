require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/database");
const invokeGeminiAi = require("./src/services/ai.service");

connectDB();

(async () => {
    try {
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