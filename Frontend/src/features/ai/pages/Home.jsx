import InterviewForm from "../components/InterviewForm";

export default function Home() {
    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "50px auto",
            }}
        >
            <h1>AI Interview Preparation Platform</h1>

            <InterviewForm />
        </div>
    );
}