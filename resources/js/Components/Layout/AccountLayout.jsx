import AccountSidebar from '@/Pages/Account/AccountSidebar';
import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
export default function AccountLayout({ children }) {
    const { url } = usePage();
    return (
        <div className="mx-auto w-full max-w-7xl gap-8 px-4 py-10">
            <div className="grid min-h-screen items-start gap-6 md:grid-cols-[310px_1fr]">
                {' '}
                <div className="h-fit">
                    <AccountSidebar />
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={url}
                        className="min-w-0"
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -15,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
