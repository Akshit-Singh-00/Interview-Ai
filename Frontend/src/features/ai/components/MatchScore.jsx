export default function MatchScore({ score }) {
    return (
        <div className="match-score-card">
            <h2>Match Score</h2>

            <div className="score-circle">
                {score}%
            </div>
        </div>
    );
}