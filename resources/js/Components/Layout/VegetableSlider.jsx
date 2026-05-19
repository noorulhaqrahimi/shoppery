import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
    {
        link: '/images/cabbage1.jpg',
    },
    {
        link: '/images/cabbage2.jpg',
    },
    {
        link: '/images/cabbage3.jpg',
    },
    {
        link: '/images/cabbage4.jpg',
    },
    {
        link: '/images/cabbage5.jpg',
    },
];

function VegetableSlider() {
    const [activeImage, setActiveImage] = useState(images[0]);
    return (
        <>
            <div className="flex h-full items-center justify-start">
                <div className="relative">
                    <div className="swiper-button-prev-custom absolute left-10 top-10 z-10 -translate-x-1/2 cursor-pointer">
                        <img src="/images/vectorup.png" alt="" />
                    </div>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        className="mt-20 h-[420px] w-[80px]"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    onClick={() => setActiveImage(image)}
                                    className={`flex cursor-pointer items-center justify-center rounded-lg border p-2 transition-all duration-300 ${
                                        activeImage === image
                                            ? 'border-green-500'
                                            : 'border-gray-200'
                                    }`}
                                >
                                    <img
                                        className="h-[50px] w-[50px] object-cover"
                                        src={image.link}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-next-custom absolute left-10 z-10 -translate-x-1/2 cursor-pointer">
                        <img src="/images/vectordown.png" alt="" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <img
                            className="h-[330px] w-[450px] xl:h-[400px] xl:w-[600px]"
                            src={activeImage.link}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VegetableSlider;
