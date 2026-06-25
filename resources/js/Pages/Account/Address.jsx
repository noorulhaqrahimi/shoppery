export default function Address({ address, onEdit }) {
    return (
        <div>
            <div className="flex h-[320px] flex-col justify-center gap-4 rounded-lg border border-[#E5E5E5] px-8 py-6 md:px-4 lg:px-10">
                <p className="text-[14px] font-medium capitalize leading-[100%] text-[#666666]">
                    BILLING ADDRESS
                </p>
                <div className="mt-5 flex flex-col gap-3">
                    {' '}
                    <h3 className="text-[18px] font-medium leading-[150%] text-[#1A1A1A]">
                        {address.name}
                    </h3>
                    <p className="text-[14px] font-normal leading-[150%] text-[#666666]">
                        {address.address}
                    </p>
                    <p className="break-words text-base font-normal leading-[150%] text-[#1A1A1A]">
                        {address.email}
                    </p>
                    <p className="text-base font-normal leading-[150%] text-[#1A1A1A]">
                        {address.phone}
                    </p>
                </div>
                <button
                    onClick={onEdit}
                    className="mt-5 text-left text-base font-medium leading-[150%] text-[#00B207]"
                >
                    Edit Address
                </button>
            </div>
        </div>
    );
}
