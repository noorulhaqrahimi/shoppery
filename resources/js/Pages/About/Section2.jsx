import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
function Section2() {
    const contents = [
        {
            image: '/images/leaf2.png',
            title: '100% Organic food',
            desc: '100% healthy & Fresh food.',
        },
        {
            image: '/images/stars.png',
            title: 'Customer Feedback',
            desc: 'Our happy customer',
        },
        {
            image: '/images/truck.png',
            title: 'Free Shipping',
            desc: 'Free shipping with discount',
        },
        {
            image: '/images/headphones.png',
            title: 'Great Support 24/7',
            desc: 'Instant access to Contact',
        },
        {
            image: '/images/bag.png',
            title: '100% Sucure Payment',
            desc: 'We ensure your money is save',
        },
        {
            image: '/images/package.png',
            title: '100% Organic food',
            desc: '100% healthy & Fresh food.',
        },
    ];
    return (
        <AnimatedSection className="w-full py-20">
            <div className="flex h-auto max-h-[700px] flex-col gap-4 px-4 md:flex-row xl:hidden">
                <div className="flex w-full flex-col gap-3 lg:gap-6">
                    <h1 className="text-3xl font-semibold text-[#002E03] lg:text-5xl">
                        100% Trusted <br /> Organic Food Store
                    </h1>
                    <p className="w-full max-w-[590px] text-[14px] text-[#666666] md:text-[18px]">
                        Pellentesque a ante vulputate leo porttitor luctus sed
                        eget eros. Nulla et rhoncus neque. Duis non diam eget
                        est luctus tincidunt a a mi. Nulla eu eros consequat
                        tortor tincidunt feugiat.
                    </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-4">
                    {contents.map((content) => (
                        <div className="flex gap-2">
                            <div className="hfull flex max-h-[52px] w-full max-w-[52px] items-center justify-center rounded-[26px] bg-[#00B2071A]">
                                <img
                                    className="h-[26px] w-[26px]"
                                    src={content.image}
                                    alt="Content"
                                />
                            </div>
                            <div>
                                <h2 className="text-[18px] font-medium">
                                    {content.title}
                                </h2>
                                <p className="text-[#808080]">{content.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className="flex w-full justify-center py-10">
                <div className="w-full">
                    <div className="relative h-[270px] w-full overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center md:h-[400px] lg:h-[600px] xl:h-[670px]">
                        <div className="flex h-full justify-around">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="">
                                    <img
                                        className="h-[270px] w-full max-w-[700px] md:h-[400px] lg:h-[600px] xl:h-[670px]"
                                        src="/images/farmer2.png"
                                        alt="farmer"
                                    />
                                </div>

                                <div className="hidden w-full flex-col justify-center gap-6 xl:flex">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-3xl font-semibold text-[#002E03] lg:text-5xl">
                                            100% Trusted <br /> Organic Food
                                            Store
                                        </h1>
                                        <p className="w-full max-w-[590px] text-[14px] text-[#666666] md:text-[18px]">
                                            Pellentesque a ante vulputate leo
                                            porttitor luctus sed eget eros.
                                            Nulla et rhoncus neque. Duis non
                                            diam eget est luctus tincidunt a a
                                            mi. Nulla eu eros consequat tortor
                                            tincidunt feugiat.{' '}
                                        </p>
                                    </div>
                                    <div className="grid w-full grid-cols-2 gap-6">
                                        {contents.map((content) => (
                                            <div className="flex gap-2">
                                                <div className="hfull flex max-h-[52px] w-full max-w-[52px] items-center justify-center rounded-[26px] bg-[#00B2071A]">
                                                    <img
                                                        className="h-[26px] w-[26px]"
                                                        src={content.image}
                                                        alt="Content"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-[18px] font-medium">
                                                        {content.title}
                                                    </h2>
                                                    <p className="text-[#808080]">
                                                        {content.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}

export default Section2;
