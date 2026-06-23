import React from 'react'
import { Filter } from 'lucide-react'




const FilterBar = () => {
  return (
    <>
    <div className='w-full justify-evenly flex mt-5 -mb-2 items-center gap-3 lg:shadow-white shadow-md h-[70px]'>
        <div className='flex justify-center gap-1 px-3 py-2 items-center lg:relative lg:left-[-75px] sm:px-7 sm:py-2 bg-[#00B207] rounded-[80px] border-[2px]'>
          <Filter size={13} color='white' />
          <p className='text-[14px] lg:text-[18px] text-white'>Filters</p>
        </div>
       <select className='text-[11px] lg:relative lg:left-[-130px] lg:text-[15px] sm:px-7 lg:px-9 lg:py-2 rounded-lg px-3 py-1'>
        <option className="text-[11px] lg:text-[15px] sm:text[15px]">Sort by: Latest</option>
       </select>
        <div className='px-2 py-2 flex rounded-lg lg:relative lg:left-20'>
          <p className='text-[14px] sm:flex sm:text-[15px] lg:text-[17px]'><span className='font-semibold mr-2'>52</span> Result <span className='hidden sm:flex ml-1'> Found</span></p>
        </div>
    </div>
    </>
  )
}

export default FilterBar
