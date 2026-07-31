export default function GenerateButton({
    loading,
}) {
    return (
        <button type="submit">
            {loading
                ? "Generating..."
                : "Generate Interview Report"}
        </button>
    );
}