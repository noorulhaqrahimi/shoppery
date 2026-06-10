const CommentSection = () => {
    return (
        <div className="mt-5 flex flex-col gap-5">
            <h2 className="text-[24px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A]">
                Leave a comment
            </h2>
            <div className="flex justify-between gap-4">
                <div className="flex w-full flex-col items-start gap-3">
                    <label
                        className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#1A1A1A]"
                        htmlFor="full-name"
                    >
                        Full Name
                    </label>
                    <input
                        className="w-full rounded-md border-[1px] border-[#E5E5E5] outline-none focus:border-[#00B207] focus:ring-0"
                        type="text"
                        id="full-name"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="flex w-full flex-col items-start gap-3">
                    <label
                        className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#1A1A1A]"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full rounded-md border-[1px] border-[#E5E5E5] outline-none focus:border-[#00B207] focus:ring-0"
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                    />
                </div>
            </div>
            <div className="flex w-full flex-col items-start gap-3">
                <label htmlFor="comment">Message</label>
                <textarea
                    rows={4}
                    className="w-full rounded-md border-[1px] border-[#E5E5E5] outline-none focus:border-[#00B207] focus:ring-0"
                    name=""
                    id="comment"
                ></textarea>
            </div>
            <div className="flex items-center gap-2">
                <input
                    className="rounded-[3px] border-[1px] border-[#CCCCCC] accent-[#00B207] outline-none focus:border-[#00B207] focus:ring-0"
                    type="checkbox"
                />
                <p className="text-[14px] font-medium leading-[150%] tracking-[0%] text-[#666666]">
                    Save my name and email in this browser for the next time I
                    comment.
                </p>
            </div>
            <button className="w-[211px] rounded-[43px] bg-[#00B207] py-4 text-[16px] font-semibold leading-[120%] text-white">
                Post Comments
            </button>
        </div>
    );
};

export default CommentSection;
