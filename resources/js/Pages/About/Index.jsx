import Breadcrumb from '@/Components/Breadcrumb';
import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

export default function About() {
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
            ></Breadcrumb>
            <AnimatedSection>
                <div className="container mx-auto w-full max-w-[1300px] py-20">
                    <div className="grid grid-cols-1 items-center justify-center gap-10 px-4 md:grid-cols-2">
                        <div className="grid grid-cols-1 items-center justify-center gap-3 lg:gap-6">
                            <div>
                                <h1 className="text-3xl font-semibold lg:text-5xl">
                                    100% Trusted <br /> Organic Food Store
                                </h1>
                                <p className="w-full max-w-[590px] text-[14px] text-[#666666] md:text-[18px]">
                                    Morbi porttitor ligula in nunc varius
                                    sagittis. Proin dui nisi, laoreet ut tempor
                                    ac, cursus vitae eros. Cras quis ultricies
                                    elit. Proin ac lectus arcu. Maecenas aliquet
                                    vel tellus at accumsan. Donec a eros non
                                    massa vulputate ornare. Vivamus ornare
                                    commodo ante, at commodo felis congue vitae.
                                </p>
                            </div>
                            <div></div>
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
            <AnimatedSection>
                <div className="flex px-4 py-10 lg:hidden">
                    <div className="grid w-full max-w-[50%] grid-cols-1 items-center justify-center gap-3 lg:gap-6">
                        <h1 className="text-3xl font-semibold lg:text-5xl">
                            100% Trusted <br /> Organic Food Store
                        </h1>
                        <p className="w-full max-w-[590px] text-[14px] text-[#666666] md:text-[18px]">
                            Pellentesque a ante vulputate leo porttitor luctus
                            sed eget eros. Nulla et rhoncus neque. Duis non diam
                            eget est luctus tincidunt a a mi. Nulla eu eros
                            consequat tortor tincidunt feugiat.
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="container flex h-auto max-h-[300px] w-full max-w-full justify-center bg-[url('/images/background.png')] md:max-h-[550px]">
                    <div className="flex w-full max-w-[1400px] flex-col md:flex-row">
                        <img
                            className="h-auto max-h-[300px] md:max-h-[550px]"
                            src="/images/farmer2.png"
                            alt="farmer"
                        />
                        <div className="hidden flex-col px-4 py-10 lg:flex">
                            <div className="ml-4 flex flex-col gap-3 lg:gap-6">
                                <h1 className="text-3xl font-semibold lg:text-5xl">
                                    100% Trusted <br /> Organic Food Store
                                </h1>
                                <p className="w-full max-w-[590px] text-[14px] text-[#666666] md:text-[18px]">
                                    Pellentesque a ante vulputate leo porttitor
                                    luctus sed eget eros. Nulla et rhoncus
                                    neque. Duis non diam eget est luctus
                                    tincidunt a a mi. Nulla eu eros consequat
                                    tortor tincidunt feugiat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </MainLayout>
    );
}
