export default function SelfDescriptionInput({ value, onChange }) {
    return (
        <div className="form-group">
            <label>Tell us about yourself</label>

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Describe yourself, your skills, experience, projects, interests, strengths..."
            />
        </div>
    );
}