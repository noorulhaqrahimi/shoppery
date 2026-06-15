export default function Button({ loading, children, ...props }) {
    return (
        <button
            {...props}
            disabled={loading || props.disabled}
            className="rounded-full bg-[#00B207] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#2C742F] disabled:cursor-not-allowed disabled:opacity-60"
        >
            {loading ? 'Saving...' : children}
        </button>
    );
}
