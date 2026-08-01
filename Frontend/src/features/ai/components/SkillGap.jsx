export default function SkillGap({ skills }) {
    return (
        <div>
            <h2>Skill Gap</h2>

            {skills.map((skill, index) => (
                <div key={index}>
                    <h3>{skill.skill}</h3>

                    <p>{skill.severity}</p>
                </div>
            ))}
        </div>
    );
}