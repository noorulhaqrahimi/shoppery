import { motion } from 'framer-motion';
import { useState } from 'react';
function FAQs() {
    const [ShowAnswer, setShowAnswer] = useState(false);
    const faqs = [
        {
            question: 'What makes your products organic?',
            plus: '/images/plus2.png',
            minus: '/images/minus.png',
            answer: 'Our products are grown without the use of harmful synthetic pesticides or fertilizers. We work with trusted farmers to ensure high quality and natural freshness.',
        },
        {
            question: 'How long does delivery take?',
            plus: '/images/plus2.png',
            answer: 'Standard delivery usually takes 2-5 business days, depending on your location. You will receive a tracking number once your order has been shipped.',
        },

        {
            question: 'Can I return or exchange a product?',
            plus: '/images/plus2.png',

            answer: 'Yes, you can return or exchange eligible products within 14 days of delivery. The items must be unused and in their original packaging.',
        },
        {
            question: 'Do you offer discounts for bulk orders?',
            plus: '/images/plus2.png',
            answer: 'Yes, we provide special discounts for bulk purchases and business orders. Please contact our support team for a custom quote.',
        },
        {
            question: 'How can I contact customer support?',
            plus: '/images/plus2.png',
            answer: 'You can reach our customer support team by email, phone, or through the contact form on our website. We are available Monday through Friday to assist you.',
        },
    ];
    return (
        <div className="flex justify-center">
            {' '}
            <div className="mx-4 mt-10 flex w-full max-w-[1250px] flex-col items-center gap-10 lg:flex-row">
                <div className="flex w-full max-w-[650px] flex-col gap-8">
                    <h1 className="text-center text-[48px] font-semibold leading-[120%] lg:text-start">
                        Welcome, Let's Talk About Our Ecobazar
                    </h1>
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                className={`${ShowAnswer === index ? 'rounded-md border border-green-500' : ''}`}
                                key={index}
                            >
                                <div
                                    className={` ${ShowAnswer === index ? 'bg-white' : ''} flex h-[56px] w-full items-center justify-between rounded-md bg-[#F2F2F2] px-4`}
                                >
                                    <p
                                        className={`text-[16px] font-semibold leading-[150%] ${ShowAnswer === index ? 'text-[#2C742F]' : 'text-[#1A1A1A]'}`}
                                    >
                                        {faq.question}
                                    </p>
                                    <motion.button
                                        whileTap={{ scale: 0.4 }}
                                        transition={{ duration: 1.05 }}
                                        className="flex h-8 w-8 items-center justify-center rounded-[16px] bg-white tracking-[0%]"
                                        onClick={() =>
                                            setShowAnswer(
                                                ShowAnswer === index
                                                    ? null
                                                    : index,
                                            )
                                        }
                                    >
                                        <img
                                            src={
                                                ShowAnswer === index
                                                    ? '/images/minus.png'
                                                    : '/images/plus2.png'
                                            }
                                            alt="Plus button"
                                        />
                                    </motion.button>
                                </div>
                                {ShowAnswer === index && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.07 }}
                                        className="border-t border-green-500 p-4 text-[#666666]"
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <img
                        className="h-full max-h-[800px] w-full max-w-[740px]"
                        src="/images/farmer4.png"
                        alt="Farmer"
                    />
                </div>
            </div>
        </div>
    );
}

export default FAQs;
