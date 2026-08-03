const InterviewReport = require("../models/interviewReport.model");
const {
    generateInterviewReport,
} = require("../services/ai.service");

exports.generateInterview = async (req, res) => {
    try {
        const {
            resume,
            selfDescription,
            jobDescription,
        } = req.body;

        if (!resume || !selfDescription || !jobDescription) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        console.log("========== REQUEST DATA ==========");
        console.log("Resume:", resume);
        console.log("Self Description:", selfDescription);
        console.log("Job Description:", jobDescription);

        const report = await generateInterviewReport({
            resume,
            selfDescription,
            jobDescription,
        });

        const interview = await InterviewReport.create({
            user: req.user.id,
            resume,
            selfDescription,
            jobDescription,
            ...report,
        });

        res.status(201).json({
            success: true,
            interview,
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};