import useAI from "../hooks/useAI";

export default function Report() {
    const { report } = useAI();

    console.log("REPORT", report);

    if (!report) {
        return <h1>No Report</h1>;
    }
    console.log(report.preparationPlan);
    return (
        <div style={{ padding: "40px" }}>
            <h1>Interview Report</h1>

            <h2>Match Score</h2>
            <p>{report.matchScore}</p>

            <h2>Technical Questions</h2>

            {report.technicalQuestions.map((q, i) => (
                <div
                    key={i}
                    style={{
                        border: "2px solid red",
                        margin: "20px 0",
                        padding: "20px",
                    }}
                >
                    <h3>{q.question}</h3>
                    <p>{q.intention}</p>
                    <p>{q.answer}</p>
                </div>
            ))}

            <h2>Behavioral Questions</h2>

            {report.behavioralQuestions.map((q, i) => (
                <div
                    key={i}
                    style={{
                        border: "2px solid blue",
                        margin: "20px 0",
                        padding: "20px",
                    }}
                >
                    <h3>{q.question}</h3>
                </div>
            ))}

            <h2>Skill Gap</h2>

            {report.skillGap.map((s, i) => (
                <div key={i}>
                    {s.skill} - {s.severity}
                </div>
            ))}

            <h2>Preparation Plan</h2>

            {report.preparationPlan.map((d) => (
                <div key={d.day}>
                    <h3>Day {d.day}</h3>
                    <p>{d.focus}</p>
                </div>
            ))}
        </div>
    );
}