export default function JobDescriptionInput({ value, onChange }) {
    return (
        <div className="form-group">
            <label>Job Description</label>

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Paste the job description here..."
            />
        </div>
    );
}