import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLaterBox from '../components/NewsLaterBox'

export default function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full max-w-[480px]'/>

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>99193-80100 Malaba <br /> Bungoma, Kenya</p>
          <p className='text-gray-500'>Tel: (+254) 717-112-458 <br /> Email: naric@mail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carrers at Nacodric</p>
          <p className='text-gray-500'>Learn More about our teams and job oppotunities</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in delay-100 rounded-md'>Explore Jobs</button>
        </div>
      </div>
      
        <NewsLaterBox />
    </div>
  )
}
