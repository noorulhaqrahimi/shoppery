import Cart1 from './Carts/Cart1';
import Cart2 from './Carts/Cart2';
import Cart3 from './Carts/Cart3';
import Cart4 from './Carts/Cart4';
import Cart5 from './Carts/Cart5';
import Cart6 from './Carts/Cart6';
import Cart7 from './Carts/Cart7';
import Cart8 from './Carts/Cart8';
import Cart9 from './Carts/Cart9';
import Cart10 from './Carts/Cart10';

const Dindex = () => {
    return (
        <>
            <div className='hidden lg:block mt-1'>
                <div className='flex gap-12'>
                    <Cart1 />
                    <Cart2 />
                </div>
                <div className='flex gap-12'>
                    <Cart3 />
                    <Cart4 />
                </div>


                <div className='flex gap-12'>
                    <Cart5 />
                    <Cart6 />
                </div>

                <div className='flex gap-12'>
                    <Cart7 />
                    <Cart8 />
                </div>

                <div className='flex gap-12'>
                    <Cart9 />
                    <Cart10 />
                </div>
            </div>
        </>
    );
};

export default Dindex;
