import { motion, AnimatePresence } from 'framer-motion';
function Popup({ showPopup, setShowPopup }) {
    if (!showPopup) return null;
    return (
        <AnimatePresence>
            {showPopup && (
                <>
                    <motion.div
                        onClick={() => setShowPopup(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                    ></motion.div>
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            stiffness: 130,
                            damping: 18,
                        }}
                        className="fixed right-0 z-[60] h-[100vh] w-[70%] bg-white sm:w-[60%] lg:w-[40%] 2xl:w-[35]"
                    >
                        <div className="px-6">
                            <div className="mt-6 flex h-20 w-full items-center justify-between">
                                <h1 className="text-[20px] font-medium">
                                    Shopping Card (2)
                                </h1>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setShowPopup(false)}
                                    className="text-[25px] font-light"
                                >
                                    x
                                </motion.button>
                            </div>
                            <div className="flex items-center justify-between pb-2">
                                <div className="flex items-center">
                                    <img
                                        className="h-[100px] w-[120px]"
                                        src="/images/orange.png"
                                        alt="Oranges"
                                    />
                                    <div>
                                        <p>Fresh Indian Orange</p>
                                        <p className="font-semibold">
                                            <span className="font-normal text-[#808080]">
                                                1 kg x
                                            </span>{' '}
                                            12.00
                                        </p>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex h-[24px] w-[24px] items-center justify-center rounded-xl border-[1px] border-gray-300 font-light font-semibold text-[#666666]"
                                >
                                    X
                                </motion.button>
                            </div>
                            <div className="flex items-center justify-between border-t">
                                <div className="flex items-center">
                                    <img
                                        className="h-[120px] w-[120px]"
                                        src="/images/apple.png"
                                        alt="Oranges"
                                    />
                                    <div>
                                        <p>Green Apple</p>
                                        <p className="font-semibold">
                                            <span className="font-normal text-[#808080]">
                                                1 kg x
                                            </span>{' '}
                                            14.00
                                        </p>
                                    </div>
                                </div>
                                <motion.button className="flex h-[24px] w-[24px] items-center justify-center rounded-xl border-[1px] border-gray-300 font-light font-semibold text-[#666666]">
                                    X
                                </motion.button>
                            </div>
                        </div>
                        <div className="absolute bottom-10 flex w-full flex-col gap-5 px-6">
                            <div className="flex justify-between">
                                <p>2 Product</p>
                                <p className="font-bold">$26.00</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-[50px] w-[260px] rounded-[43px] bg-[#00B207] font-semibold text-white sm:w-[350px] lg:w-[300px]"
                                >
                                    Checkout
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-[50px] w-[260px] rounded-[43px] bg-[#56AC591A] font-semibold text-[#00B207] sm:w-[350px] lg:w-[300px]"
                                >
                                    Go To Cart
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default Popup;
