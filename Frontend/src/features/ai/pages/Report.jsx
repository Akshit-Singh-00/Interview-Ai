import useAI from "../hooks/useAI";
import "../../../style/report.scss";

export default function Report() {
    const { report } = useAI();

    if (!report) {
        return (
            <div className="report-page">
                <h1>No Report Found</h1>
            </div>
        );
    }

    return (
        <div className="report-page">
            <h1>Interview Report</h1>

            <div className="match-score-card">
                <h2>Match Score</h2>
                <div className="score-circle">
                    {report.matchScore}%
                </div>
            </div>

            <h2>Technical Questions</h2>

            {report.technicalQuestions.map((q, i) => (
                <div className="question-card" key={i}>
                    <h3>{q.question}</h3>

                    <p>
                        <strong>Why asked</strong>
                    </p>

                    <p>{q.intention}</p>

                    <p>
                        <strong>How to answer</strong>
                    </p>

                    <p>{q.answer}</p>
                </div>
            ))}

            <h2>Behavioral Questions</h2>

            {report.behavioralQuestions.map((q, i) => (
                <div className="question-card" key={i}>
                    <h3>{q.question}</h3>

                    <p>
                        <strong>Why asked</strong>
                    </p>

                    <p>{q.intention}</p>

                    <p>
                        <strong>How to answer</strong>
                    </p>

                    <p>{q.answer}</p>
                </div>
            ))}

            <h2>Skill Gap</h2>

            <div className="skill-grid">
                {report.skillGap.map((s, i) => (
                    <div className="skill-card" key={i}>
                        <h3>{s.skill}</h3>
                        <span className={s.severity}>
                            {s.severity.toUpperCase()}
                        </span>
                    </div>
                ))}
            </div>

            <h2>Preparation Plan</h2>

            {report.preparationPlan.map((week, i) => (
                <div className="week-card" key={i}>
                    <h3>
                        Week {week.week ?? week.day}
                    </h3>

                    <h4>{week.focus}</h4>

                    <ul>
                        {week.tasks?.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}