import Breadcrumb from '@/Components/Breadcrumb';
import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Partners from '../Home/Partners';
import Testimonials from '../Home/Testimonials';
import Section2 from './Section2';
import TeamCarts from './TeamCarts';
export default function About() {
    const ticks = [
        { image: '/images/check.png', title: 'Sed in metus pellentesque.' },
        {
            image: '/images/check.png',
            title: 'Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.',
        },
        {
            image: '/images/check.png',
            title: 'Maecenas ut nunc fringilla erat varius.',
        },
    ];
    return (
        <MainLayout>
            <Head title="About" />
            <Breadcrumb
                items={[
                    {
                        label: 'About',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />
            <AnimatedSection>
                <div className="container mx-auto h-full max-h-[700px] w-full max-w-[1270px] py-20">
                    <div className="grid grid-cols-1 items-center justify-center gap-10 px-4 md:grid-cols-2">
                        <div className="grid grid-cols-1 items-center justify-center gap-4 lg:gap-6">
                            <h1 className="text-3xl font-semibold text-[#002E03] lg:text-5xl">
                                100% Trusted <br /> Organic Food Store
                            </h1>
                            <p className="w-full max-w-[590px] text-[14px] text-[#666666] md:text-[18px]">
                                Morbi porttitor ligula in nunc varius sagittis.
                                Proin dui nisi, laoreet ut tempor ac, cursus
                                vitae eros. Cras quis ultricies elit. Proin ac
                                lectus arcu. Maecenas aliquet vel tellus at
                                accumsan. Donec a eros non massa vulputate
                                ornare. Vivamus ornare commodo ante, at commodo
                                felis congue vitae.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <img
                                className="h-auto max-h-[300px] w-full md:max-h-[500px]"
                                src="/images/farmer.png"
                                alt="farmer"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <Section2 />
            <AnimatedSection className="mx-4 flex justify-center">
                <div className="flex w-full max-w-[1250px] flex-col gap-20 xl:flex-row">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[40px] font-semibold leading-[120%] text-[#1A1A1A] lg:text-[48px]">
                                We Delivered, You <br /> Enjoy Your Order.
                            </h2>
                            <p className="w-full max-w-[590px] text-[14px] text-[#666666] md:text-[18px]">
                                Ut suscipit egestas suscipit. Sed posuere
                                pellentesque nunc, ultrices consectetur velit
                                dapibus eu. Mauris sollicitudin dignissim diam,
                                ac mattis eros accumsan rhoncus. Curabitur
                                auctor bibendum nunc eget elementum.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            {ticks.map((tick) => (
                                <div className="flex items-center gap-3">
                                    <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-[#00B2071A]">
                                        <img src={tick.image} alt="Tick" />
                                    </div>
                                    <p className="text-[12px] text-[#666666]">
                                        {tick.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="flex h-[50px] w-[190px] items-center justify-center gap-2 rounded-[43px] bg-[#00B207] text-[16px] font-semibold text-white hover:bg-green-600"
                        >
                            Shop Now{' '}
                            <img src="/images/victor.png" alt="victor" />
                        </motion.button>
                    </div>
                    <div className="felx mx-4 items-end justify-center">
                        <img
                            className="h-auto max-h-[700px] w-full max-w-[900px]"
                            src="/images/farmer3.png"
                            alt="farmer"
                        />
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection className="flex flex-col items-center justify-center bg-gray-100">
                <div className="mx-4 flex flex-col py-10">
                    <div className="flex w-full max-w-[640px] flex-col items-center gap-2">
                        <h1 className="text-center text-[40px] font-semibold leading-[120%] text-[#1A1A1A] lg:text-[48px]">
                            Our Awesome Team
                        </h1>
                        <p className="w-full max-w-[590px] text-center text-[14px] text-[#666666] md:text-[18px]">
                            Pellentesque a ante vulputate leo porttitor luctus
                            sed eget eros. Nulla et rhoncus neque. Duis non diam
                            eget est luctus tincidunt a a mi.
                        </p>
                    </div>
                </div>
                <div className="mb-24 mt-10 w-full">
                    <TeamCarts />
                </div>
            </AnimatedSection>
            <AnimatedSection className="bg-gray-200">
                <div className="h-full">
                    <Testimonials />
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <Partners />
            </AnimatedSection>
        </MainLayout>
    );
}
