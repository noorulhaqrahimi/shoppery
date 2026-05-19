import { useState } from 'react';

function Counter() {
    const [Count, setCount] = useState(0);
    const increase = () => {
        setCount(Count + 1);
    };
    const decrease = () => {
        setCount(Count - 1);
        if(Count <= 0){
          setCount(0)
        }
    };

    return (
        <div className=' flex items-center justify-center h-[50px] w-[124px] gap-3 border-[1px] rounded-[170px]'>
            <div>
                <img className='cursor-pointer' onClick={increase} src="/images/plus.png" alt="" />
            </div>
            <span className='text-[16px]'>{Count}</span>
            <div>
              <img className='cursor-pointer' onClick={decrease} src="/images/minus.png" alt="" />
            </div>
        </div>
    );
}

export default Counter;
