import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
        <div className='flex gap-6 flex-wrap'>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]'>
                <option>Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type='text' name='min' placeholder='min-price' className='text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <input type='text' name='max' placeholder='max-price' className='text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
             <select name="size" id="" className='py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]'>
                <option>Size</option>
            </select>
             <select name="Color" id="" className='py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]'>
                <option>Color</option>
                <option value="">Pink</option>
                <option value="">Black</option>
            </select>
             <select name="ribbon" id="" className='py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]'>
                <option>Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
             <select name="all" id="" className='py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]'>
                <option>All Filter</option>
                <option value="">Physical</option>
                <option value="">Digital</option>
            </select>
        </div>
        <div className=''>
            <select name="sort" id="" className='py-2 px-4 rounded-2xl text-sm font-medium bg-white ring-1 ring-gray-400'>
                <option>Sort by</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    </div>
  )
}

export default Filter