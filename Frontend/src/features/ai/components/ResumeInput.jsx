export default function ResumeInput({ value, onChange }) {
    return (
        <>
            <label>Resume</label>

            <textarea
                rows={10}
                placeholder="Paste your resume..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}