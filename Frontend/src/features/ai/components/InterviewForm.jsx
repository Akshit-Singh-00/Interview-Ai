import { useState } from "react";

import ResumeInput from "./ResumeInput";
import SelfDescriptionInput from "./SelfDescriptionInput";
import JobDescriptionInput from "./JobDescriptionInput";
import GenerateButton from "./GenerateButton";

import useInterview from "../hooks/useInterview";

export default function InterviewForm() {
    const [resume, setResume] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const { loading, generate } = useInterview();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await generate({
                resume,
                selfDescription,
                jobDescription,
            });

            console.log(response);

            alert("Interview Report Generated Successfully");
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