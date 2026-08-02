export default function ResumeInput({ value, onChange }) {
    return (
        <div className="form-group">
            <label>Resume</label>

            <textarea
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                placeholder="Paste your resume..."
            />
        </div>
    );
}