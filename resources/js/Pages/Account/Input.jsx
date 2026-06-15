export default function Input({ className = '', ...props }) {
    return (
        <input
            {...props}
            className={`w-full rounded-md border border-[#E5E5E5] px-4 py-3 transition focus:border-[#00B207] focus:outline-none ${className} `}
        />
    );
}
