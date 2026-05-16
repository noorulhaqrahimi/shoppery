import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const Service = [
    {
        id: 1,
        src: '/images/Services/Icon1.png',
        title: 'Free Shipping',
        des: 'Free shipping with discount',
    },
    {
        id: 2,
        src: '/images/Services/Icon2.png',
        title: 'Great Support 24/7',
        des: 'Instant access to contact',
    },
    {
        id: 3,
        src: '/images/Services/Icon3.png',
        title: '100% Secure Payment',
        des: 'We ensure your money is safe',
    },
    {
        id: 4,
        src: '/images/Services/Icon4.png',
        title: 'Money-Back Guarantee',
        des: '30 days money-back guarantee',
    },
];

const Services = () => {
    return (
        <AnimatedSection className="flex justify-center">
            <section className="container flex justify-center">
                <div className="flex rounded-[8px] border-[1px] border-[#ccc]">
                    {Service.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex h-[222px] w-[330px] flex-col gap-3 rounded-[8px] border-r-[1px] border-[#ccc] p-8 hover:bg-[#00B207] hover:text-[#fff]"
                            >
                                <img
                                    className="h-[70px] w-[70px]"
                                    src={item.src}
                                    alt="icon"
                                />
                                <h2 className="text-lg font-semibold leading-[150%] tracking-[0%] text-[#1A1A1A]">
                                    {item.title}
                                </h2>
                                <p className="text-sm font-medium leading-[150%] tracking-[0%] text-[#808080]">
                                    {item.des}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </AnimatedSection>
    );
};

export default Services;
