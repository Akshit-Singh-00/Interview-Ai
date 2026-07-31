export default function SelfDescriptionInput({
    value,
    onChange,
}) {
    return (
        <>
            <label>Tell us about yourself</label>

            <textarea
                rows={5}
                placeholder="Introduce yourself..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}