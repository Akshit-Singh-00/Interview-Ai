const { generateInterviewReport } = require("../services/ai.service");
const InterviewReport = require("../models/interviewReport.model");

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

        const report = await generateInterviewReport({
            resume,
            selfDescription,
            jobDescription,
        });

        console.log("========== AI REPORT ==========");
        console.log(report);

        const interview = await InterviewReport.create({
            user: req.user.id,
            resume,
            selfDescription,
            jobDescription,
            ...report,
        });

        console.log("========== SAVED DOCUMENT ==========");
        console.log("Sending response:");
        console.log(interview);

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