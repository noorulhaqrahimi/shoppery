export default function Profile({ user, onEdit }) {
    return (
        <div className="rounded-lg border border-[#E5E5E5] px-4 py-6">
            <div className="flex flex-col items-center gap-4">
                <img
                    src={user.img}
                    alt="Profile Preview"
                    className="h-[150px] w-[150px] rounded-full object-cover"
                />
                <h3 className="text-xl font-medium leading-[150%] text-[#1A1A1A]">
                    {user.name}
                </h3>
                <p className="text-xs font-normal leading-[150%] text-[#808080]">
                    {user.role}
                </p>
                <button
                    onClick={onEdit}
                    className="text-base font-medium leading-[150%] text-[#00B207]"
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
}
