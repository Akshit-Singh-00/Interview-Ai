export default function PreparationPlan({ plan }) {
    console.log("PLAN:", plan);

    return (
        <div>
            <h2>Preparation Plan</h2>

            {plan.map((item, index) => {
                console.log(item);

                return (
                    <div key={index}>
                        <pre>{JSON.stringify(item, null, 2)}</pre>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}