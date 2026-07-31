import { useState } from "react";
import { generateInterview } from "../services/interview.api";

export default function Home() {
    const [resume, setResume] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await generateInterview({
                resume,
                selfDescription,
                jobDescription,
            });

            console.log(response);

            alert("Interview Report Generated Successfully!");
        } catch (err) {
            console.error(err);

            alert(
                err.response?.data?.message ||
                    "Unable to generate interview report."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "50px auto",
            }}
        >
            <h1>AI Interview Preparation Platform</h1>

            <form onSubmit={handleGenerate}>
                <h3>Resume</h3>

                <textarea
                    rows={8}
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    placeholder="Paste your resume..."
                />

                <h3>Tell us about yourself</h3>

                <textarea
                    rows={5}
                    value={selfDescription}
                    onChange={(e) =>
                        setSelfDescription(e.target.value)
                    }
                    placeholder="Introduce yourself..."
                />

                <h3>Job Description</h3>

                <textarea
                    rows={8}
                    value={jobDescription}
                    onChange={(e) =>
                        setJobDescription(e.target.value)
                    }
                    placeholder="Paste the job description..."
                />

                <br />
                <br />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Generating..."
                        : "Generate Interview Report"}
                </button>
            </form>
        </div>
    );
}