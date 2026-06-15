import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function PasswordInput({
    type = 'text',
    className = '',
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';

    return (
        <div className="relative">
            <input
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                className={`w-full rounded-md border border-[#E5E5E5] px-4 py-3 transition focus:border-[#00B207] focus:outline-none ${
                    isPassword ? 'pr-12' : ''
                } ${className}`}
                {...props}
            />

            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    );
}
