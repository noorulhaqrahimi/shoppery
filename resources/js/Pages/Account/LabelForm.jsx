export default function LabelForm({ children, className = '', ...props }) {
    return (
        <label
            className={`mb-1 block text-sm font-normal leading-[150%] text-[#1A1A1A] ${className}`}
            {...props}
        >
            {children}
        </label>
    );
}
