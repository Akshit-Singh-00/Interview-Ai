import { useState } from "react";

import ResumeInput from "./ResumeInput";
import SelfDescriptionInput from "./SelfDescriptionInput";
import JobDescriptionInput from "./JobDescriptionInput";
import GenerateButton from "./GenerateButton";

import { useNavigate } from "react-router-dom";
import useAI from "../hooks/useAI";
import useInterview from "../hooks/useInterview";

export default function InterviewForm() {
    const [resume, setResume] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const { loading, generate } = useInterview();

    const navigate = useNavigate();
    const { setReport } = useAI();

   const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Resume:", resume);
    console.log("Self Description:", selfDescription);
    console.log("Job Description:", jobDescription);

    try {
        const response = await generate({
            resume,
            selfDescription,
            jobDescription,
        });

        setReport(response.interview);

        navigate("/report");
    } catch (err) {
        console.error(err);

        alert(
            err.response?.data?.message ||
            err.message ||
            "Something went wrong."
        );
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <ResumeInput
                value={resume}
                onChange={setResume}
            />

            <br />

            <SelfDescriptionInput
                value={selfDescription}
                onChange={setSelfDescription}
            />

            <br />

            <JobDescriptionInput
                value={jobDescription}
                onChange={setJobDescription}
            />

            <br />

            <GenerateButton loading={loading} />
        </form>
    );
}