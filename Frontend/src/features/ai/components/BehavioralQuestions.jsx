export default function BehavioralQuestions({ questions = [] }) {
    return (
        <div>
            <h2>Behavioral Questions</h2>

            {questions.map((q, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid white",
                        padding: "15px",
                        marginBottom: "20px",
                    }}
                >
                    <h3>{q.question}</h3>

                    <p><b>Why asked:</b> {q.intention}</p>

                    <p><b>Answer:</b> {q.answer}</p>
                </div>
            ))}
        </div>
    );
}