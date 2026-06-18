const Cart1 = () => {
    return (
        <div className="group h-[494px] hover:scale-105 duration-500 mt-8 w-[400px] overflow-hidden rounded-lg shadow-lg">
            <div className="relative">
                <img src='/images/orangc.png' alt="" />
                <div className="absolute shadow-lg bottom-6 left-6 flex h-[58px] w-[58px] flex-col items-center justify-center rounded-[4px] bg-white">
                    <p className="text-[20px] font-medium leading-[150%]">
                        18
                    </p>
                    <p className="text-[12px] font-medium leading-[100%] tracking-[3%] text-[#808080]">
                        NOV
                    </p>
                </div>
            </div>
            <div className="flex h-[200px] flex-col justify-center gap-4 bg-white px-5 py-5">
                <div className="flex gap-3">
                    <div className="flex gap-1">
                        <img src="/images/Home/News/tag.png" alt="" />
                        <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#4D4D4D]">
                            Fruit
                        </p>
                    </div>
                    <div className="flex gap-1">
                        <img src="/images/Home/News/by.png" alt="" />
                        <p className="whitespace-nowrap text-[14px] font-normal leading-[150%] tracking-[0%] text-[#4D4D4D]">
                           High Garden
                        </p>
                    </div>
                    <div className="flex gap-1">
                        <img src="/images/Home/News/comment.png" alt="" />
                        <p className="whitespace-nowrap text-[14px] font-normal leading-[150%] tracking-[0%] text-[#4D4D4D]">
                          65 Comments
                        </p>
                    </div>
                </div>
                <h2 className="text-[18px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A] transition duration-200 ease-linear group-hover:text-[#2C742F]">
                   Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                </h2>
                <button className="flex w-[114px] items-center justify-center gap-2 whitespace-nowrap">
                    <span className="text-[16px] font-semibold leading-[120%] tracking-[0%] text-[#00B207]">
                        Read More
                    </span>{' '}
                    <div>
                        <img src="/images/Home/News/arrow.png" alt="" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Cart1;
