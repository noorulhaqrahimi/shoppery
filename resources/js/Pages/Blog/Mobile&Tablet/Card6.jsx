import { ArrowBigRight, Leaf } from 'lucide-react';

const Card6 = () => {
    return (
        <>
            <div className="m-4 flex h-[clamp(130px,25vw,500px)] w-[clamp(330px,93vw,1500px)] justify-start gap-3 rounded-lg border bg-white shadow-md sm:h-[clamp(130px,25vw,500px)]">
                <div className="flex justify-start rounded-lg ">
                    <img
                        src="/images/carts/orange.png"
                        className="w-[180px] rounded-s-lg object-cover sm:w-[210px] md:w-[clamp(250px,60vw,330px)]"
                        alt="photo"
                    />
                </div>
                <div className="m-2 md:mt-3">
                    <h2 className="mt-1 flex items-center gap-2 text-[clamp(13px,3vw,20px)]">
                        <Leaf size={16} color="green" />
                        Food
                    </h2>
                    <p className="mt-1 text-[clamp(10px,2vw,20px)] sm:text-[clamp(10px,2vw,20px)]">
                        By Admin - 58 Comments
                    </p>
                    <p className="mt-1 text-[clamp(12px,3vw,15px)] font-bold sm:text-[clamp(14px,3vw,20px)] sm:font-semibold md:text-[clamp(14px,3vw,25px)]">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </p>
                    <button className="-ml-1 mt-1 md:ml-2 md:mt-4 flex w-[114px] items-center justify-center gap-2 whitespace-nowrap">
                        <span className="text-[clamp(12px,2vw,20px)] font-semibold leading-[120%] tracking-[0%] text-[#00B207] sm:ml-3   sm:text-[clamp(15px,2vw,20px)]">
                            Read More
                        </span>
                        <div>
                            <ArrowBigRight color="green" />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card6;
