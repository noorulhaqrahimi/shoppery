import React from 'react'
import Added from './Added';

const Gallery = () => {
  return (
    <>
    <div className='mt-6'>
        <h1 className='text-[20px] font-semibold'>Our Gallery</h1>
        <div className='mt-6'>
          
          <div className='flex mb-3 gap-2'>
            <img className='w-[111px]' src="/Gallery/1.png" alt="tarkari" />
            <img className='w-[111px]' src="/Gallery/2.png" alt="golpi" />
            <img className='w-[111px]' src="/Gallery/3.png" alt="mixTarkary" />
          </div>

           <div className='flex mb-3 gap-2'>
            <img className='w-[111px]' src="/Gallery/4.png" alt="dolmamorch" />
            <img className='w-[111px]' src="/Gallery/5.png" alt="carrot" />
            <img className='w-[111px]' src="/Gallery/6.png" alt="beanspally" />
          </div>

          <div className='flex mb-3 gap-2'>
            <img className='w-[111px]' src="/Gallery/7.png" alt="dolmamorch" />
            <img className='w-[111px]' src="/Gallery/8.png" alt="carrot" />
            <img className='w-[111px]' src="/Gallery/9.png" alt="beanspally" />
          </div>

        </div>


         <div className="mt-6 hidden h-[1px] w-[350px] bg-gray-300 lg:block"></div>
    
    <Added />
    
    </div>
    </>
  )
}

export default Gallery;