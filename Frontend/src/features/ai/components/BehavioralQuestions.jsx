export default function BehavioralQuestions({
    questions,
}) {
    return (
        <div>
            <h2>Behavioral Questions</h2>

            {questions.map((q, index) => (
                <div key={index}>
                    <h3>{q.question}</h3>

                    <p>
                        <strong>Why asked:</strong>{" "}
                        {q.intention}
                    </p>

                    <p>
                        <strong>How to answer:</strong>{" "}
                        {q.answer}
                    </p>

                    <hr />
                </div>
            ))}
        </div>
    );
}