import React from 'react'
import { assets } from '../assets/assets'

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* hero left side starts*/}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl md:text-5xl font-bold sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2 py-3'>
                <p className='font-semibold text-sm md:text-base'>Shop Now</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>
        </div>
      </div>
      {/* hero left side ends*/}



      {/* hero right side starts*/}

      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}
