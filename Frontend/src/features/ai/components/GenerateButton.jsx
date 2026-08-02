export default function GenerateButton({ loading }) {
    return (
        <button
            className="generate-btn"
            disabled={loading}
        >
            {loading ? "Generating..." : "Generate Interview Report"}
        </button>
    );
}