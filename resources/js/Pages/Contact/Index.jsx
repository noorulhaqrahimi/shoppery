import Breadcrumb from '@/Components/Breadcrumb';
import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import MainLayout from '@/Components/Layout/MainLayout';
import emailjs from '@emailjs/browser';
import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import FAQs from './FAQs';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_33mh8xd',
                'template_acacwc4',
                form.current,
                'gOKboqw6q14U58HXB',
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send message.');
                    console.log(error);
                },
            );
    };

    return (
        <MainLayout>
            <Head title="Contact" />
            <Breadcrumb
                items={[
                    {
                        label: 'Contact',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />
            <AnimatedSection>
                <div className="min-w-full py-20">
                    <div className="flex justify-center">
                        <div className="mx-4 flex max-w-[1250px] flex-col items-center justify-center gap-10 lg:flex-row">
                            <div className="flex h-[530px] w-full max-w-[600px] flex-col gap-6 rounded-lg bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] lg:max-w-[312px]">
                                <div className="flex flex-col items-center justify-center gap-4 pt-10">
                                    <MapPinIcon className="h-10 w-10 text-green-600" />
                                    <p className="text-center leading-[170%] text-[#333333]">
                                        2715 Ash Dr. San Jose, South Dakota
                                        83475
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-4 border-t py-6">
                                    <EnvelopeIcon className="h-10 w-10 text-green-600" />
                                    <p className="text-center leading-[170%] text-[#333333]">
                                        Proxy@gmail.com <br />{' '}
                                        Help.proxy@gmail.com
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-4 border-t py-6">
                                    <PhoneIcon className="h-10 w-10 text-green-600" />
                                    <p className="text-center leading-[170%] text-[#333333]">
                                        (219) 555-0114 <br /> (164) 333-0487
                                    </p>
                                </div>
                            </div>

                            <div className="flex max-w-[600px] items-center justify-center lg:max-w-[984px]">
                                <div className="flex h-[530px] w-auto flex-col gap-6 rounded-lg bg-white p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] lg:max-w-[984px]">
                                    <div className="gap- flex flex-col">
                                        <h2 className="text-[24px] font-semibold leading-[150%]">
                                            Just Say Hello!
                                        </h2>
                                        <p className="leading-[150%] text-[#808080]">
                                            Do you fancy saying hi to me or you
                                            want to get started with your
                                            project and you need my help? Feel
                                            free to contact me.
                                        </p>
                                    </div>
                                    <form
                                        ref={form}
                                        onSubmit={sendEmail}
                                        className="flex w-full flex-col gap-4"
                                    >
                                        <div className="flex flex-col gap-4 lg:flex-row">
                                            <input
                                                className="w-full rounded-lg border-gray-300 outline-none focus:border-green-500 focus:outline-none focus:ring-0"
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                id="name"
                                            />
                                            <input
                                                className="w-full rounded-lg border-gray-300 outline-none focus:border-green-500 focus:outline-none focus:ring-0"
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <input
                                                className="rounded-lg border-gray-300 outline-none focus:border-green-500 focus:outline-none focus:ring-0"
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject"
                                            />
                                            <textarea
                                                className="rounded-lg border-gray-300 outline-none focus:border-green-500 focus:outline-none focus:ring-0"
                                                name="message"
                                                placeholder="Your Message"
                                                rows={4}
                                            ></textarea>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex h-[55px] w-auto max-w-[200px] items-center justify-center rounded-[43px] bg-[#00B207] hover:bg-green-600"
                                        >
                                            <button
                                                type="submit"
                                                className="text-[16px] font-semibold leading-[120%] text-white"
                                            >
                                                Send Message
                                            </button>
                                        </motion.div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.7674623664084!2d69.12276127633095!3d34.50877909348553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16906897c4293%3A0x151e63a7f1bb9014!2sDistrict%203!5e0!3m2!1sen!2sfr!4v1781334643436!5m2!1sen!2sfr"
                        className="h-[400px] w-full border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <FAQs />
            </AnimatedSection>
        </MainLayout>
    );
}
