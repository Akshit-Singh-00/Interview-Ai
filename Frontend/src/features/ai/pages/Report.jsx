import useAI from "../hooks/useAI";

import MatchScore from "../components/MatchScore";
import TechnicalQuestions from "../components/TechnicalQuestions";
import BehavioralQuestions from "../components/BehavioralQuestions";
import SkillGap from "../components/SkillGap";
import PreparationPlan from "../components/PreparationPlan";

export default function Report() {
    const { report } = useAI();

    if (!report) {
        return (
            <div style={{ padding: "40px" }}>
                <h2>No Report Found</h2>
                <p>Please generate an interview report first.</p>
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                padding: "20px",
            }}
        >
            <h1>Interview Report</h1>

            <MatchScore score={report.matchScore} />

            <TechnicalQuestions
                questions={report.technicalQuestions}
            />

            <BehavioralQuestions
                questions={report.behavioralQuestions}
            />

            <SkillGap skills={report.skillGap} />

            <PreparationPlan
                plan={report.preparationPlan}
            />
        </div>
    );
}