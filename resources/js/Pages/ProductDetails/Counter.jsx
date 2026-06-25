import { motion } from 'framer-motion';
import { useState } from 'react';

function Counter() {
    const [Count, setCount] = useState(0);
    const increase = () => {
        setCount(Count + 1);
    };
    const decrease = () => {
        setCount(Count - 1);
        if (Count <= 0) {
            setCount(0);
        }
    };

    return (
        <div className="flex h-[50px] w-[124px] items-center justify-center gap-3 rounded-[170px] border-[1px]">
            <motion.div>
                <img
                    className="transation cursor-pointer duration-300 hover:invert"
                    onClick={increase}
                    src="/images/plus.png"
                    alt=""
                />
            </motion.div>
            <span className="text-[16px]">{Count}</span>
            <div>
                <img
                    className="transation cursor-pointer duration-300 hover:invert"
                    onClick={decrease}
                    src="/images/minus.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Counter;
