import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import { MessageSquare, Tag, User } from 'lucide-react';
import { BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaShareAlt } from 'react-icons/fa';

const SingleBlock = () => {
    return (
        <MainLayout>
            <Head title="Blogs" />
            <Breadcrumb
                items={[
                    {
                        label: 'Blog',
                        href: '/blogs',
                    },
                    {
                        label: 'Single Blog',
                        href: '/blogs/singleBlog',
                    },
                ]}
                backgroundImage="/images/Breadcrumbs.png"
            ></Breadcrumb>

            <div className="container mx-auto flex max-w-7xl px-4 py-20">
                <div className="rightIs flex max-w-[872px] flex-col gap-5">
                    <div>
                        <img src="/images/SingleBlog/oranges.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <Tag color="#00B207" />
                                <p className="text-[14px] font-normal leading-[150%] tracking-[0%]">
                                    Food
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <User color="#00B207" />
                                <p className="text-[14px] font-normal leading-[150%] tracking-[0%]">
                                    By Admind
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageSquare color="#00B207" />
                                <p className="text-[14px] font-normal leading-[150%] tracking-[0%]">
                                    65 Comments
                                </p>
                            </div>
                        </div>
                        <h2 className="text-[32px] font-medium leading-[140%] tracking-[0%]">
                            Maecenas tempor urna sed quam mollis, a placerat dui
                            fringill Suspendisse.
                        </h2>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/SingleBlog/profile.png"
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <p className="text-[16px] font-medium leading-[150%] tracking-[0%]">
                                        Cameron Williamson
                                    </p>
                                    <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#808080]">
                                        4 April, 2021 • 6 min read
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-600 hover:text-white"
                                >
                                    <FaFacebook size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                                >
                                    <BsTwitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                                >
                                    <BsPinterest size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                                >
                                    <BsInstagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-600 hover:text-white"
                                >
                                    <FaShareAlt size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </MainLayout>
    );
};

export default SingleBlock;
