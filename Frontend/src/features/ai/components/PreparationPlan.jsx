export default function PreparationPlan({
    plan,
}) {
    return (
        <div>
            <h2>Preparation Plan</h2>

            {plan.map((day) => (
                <div key={day.day}>
                    <h3>Day {day.day}</h3>

                    <h4>{day.focus}</h4>

                    <ul>
                        {day.tasks.map((task, index) => (
                            <li key={index}>
                                {task}
                            </li>
                        ))}
                    </ul>

                    <hr />
                </div>
            ))}
        </div>
    );
}