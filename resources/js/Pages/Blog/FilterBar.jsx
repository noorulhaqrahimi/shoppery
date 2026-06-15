import React from 'react'
import { Filter } from 'lucide-react'




const FilterBar = () => {
  return (
    <>
    <div className='w-full justify-evenly flex items-center gap-3 shadow-md h-[70px]'>
        <div className='flex justify-center gap-1 px-3 py-2 items-center sm:px-7 sm:py-2 bg-[#00B207] rounded-[80px] border-[2px]'>
          <Filter size={13} color='white' />
          <p className='text-[14px] text-white'>Filters</p>
        </div>
       <select className='text-[11px] bg-gray-50 sm:px-7  rounded-lg px-3 py-1'>
        <option className="text-[11px] sm:text[15px]">Sort by: Latest</option>
       </select>
        <div className='px-2 py-2 flex rounded-lg'>
          <p className='text-[14px] sm:flex sm:text-[15px] '>52 Result <span className='hidden sm:flex ml-1'> Found</span></p>
        </div>
    </div>
    </>
  )
}

export default FilterBar
