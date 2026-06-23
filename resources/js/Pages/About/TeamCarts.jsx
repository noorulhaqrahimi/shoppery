import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaTwitter,
} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function TeamCarts() {
    const members = [
        {
            image: '/images/member1.png',
            name: 'Jenny Wilson',
            role: 'CEO & Founder',
        },
        {
            image: '/images/member2.png',
            name: 'Jane Cooper',
            role: 'Worker',
        },
        {
            image: '/images/member3.png',
            name: 'Cody Fisher',
            role: 'Security Guard',
        },
        {
            image: '/images/member4.png',
            name: 'Robert Fox',
            role: 'Senior Farmer Manager',
        },
        {
            image: '/images/member5.jpg',
            name: 'Alex',
            role: 'Manager',
        },
    ];
    return (
        <>
            <div className="mx-auto flex max-w-[1420px] items-center justify-center gap-4 px-4">
                <button className="team-prev flex h-[46px] w-[46px] items-center justify-center rounded-[23px] border bg-white shadow transition duration-300 hover:bg-green-600 hover:text-white">
                    <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <div></div>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.team-prev',
                        nextEl: '.team-next',
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = '.team-prev';
                        swiper.params.navigation.nextEl = '.team-next';
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    className="flex-1 overflow-visible"
                >
                    {members.map((member, index) => (
                        <SwiperSlide className="group" key={index}>
                            <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl">
                                <div className="relative h-72 w-full overflow-hidden">
                                    <div
                                        style={{
                                            backgroundImage: `url(${member.image})`,
                                        }}
                                        className="h-full w-full bg-cover bg-center"
                                    ></div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        {' '}
                                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition-all duration-300 hover:bg-green-600 hover:text-white">
                                                <FaFacebookF />
                                            </button>

                                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition-all duration-300 hover:bg-green-600 hover:text-white">
                                                <FaTwitter />
                                            </button>

                                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition-all duration-300 hover:bg-green-600 hover:text-white">
                                                <FaInstagram />
                                            </button>

                                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition-all duration-300 hover:bg-green-600 hover:text-white">
                                                <FaPinterestP />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">
                                        {member.name}
                                    </h3>

                                    <p className="text-sm text-[#666666]">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="team-next flex h-[46px] w-[46px] items-center justify-center rounded-[23px] border bg-white shadow transition duration-300 hover:bg-green-600 hover:text-white">
                    <ArrowRightIcon className="h-5 w-5" />
                </button>
            </div>
        </>
    );
}

export default TeamCarts;
