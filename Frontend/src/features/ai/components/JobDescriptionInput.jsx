export default function JobDescriptionInput({
    value,
    onChange,
}) {
    return (
        <>
            <label>Job Description</label>

            <textarea
                rows={10}
                placeholder="Paste the Job Description..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}