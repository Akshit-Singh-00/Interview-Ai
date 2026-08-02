import "./../styles/home.scss";
import InterviewForm from "../components/InterviewForm";

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-card">

                <h1 className="home-title">
                    AI Interview Preparation
                </h1>

                <p className="home-subtitle">
                    Generate personalized interview questions,
                    skill gap analysis and an 8-week roadmap.
                </p>

                <InterviewForm />

            </div>
        </div>
    );
}