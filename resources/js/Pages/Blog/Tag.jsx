import React from 'react'
import Gallery from './Gallery'

const Tag = () => {
  return (
    <>
      <div>
          <div className="mt-5 hidden h-[1px] w-[350px] bg-gray-300 lg:block"></div>
          <div className='mt-7'>
            <h1 className='text-[#1A1A1A] text-[20px] font-semibold'>Popular Tag</h1>
            <div className='mt-6'>
           <div className='flex gap-2'>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Healthy</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Low Fat</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Vegetarian</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Bread</p>
            </div>   

             <div className='flex gap-2'>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Kid Foods</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Vitamins</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Snacks</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Tiffin</p>
            </div>   

             <div className='flex gap-2'>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Meat</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Launch</p>
            <p className='bg-[#F2F2F2] text-[13px] rounded-[30px] hover:bg-[#00B207] hover:text-white mb-3  py-1 w-20 text-center'>Dinner</p>
            
            </div>                              
            </div>
          </div>
         <div className="mt-2 hidden h-[1px] w-[350px] bg-gray-300 lg:block"></div>
         <Gallery />
      </div>
    </>
  )
}

export default Tag
