import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLaterBox from '../components/NewsLaterBox'

export default function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Nacodric was born out of the disire to change the way people shop online. The journey began with a simple idea of providing a platform where customers can easilly discover, explore and purchase a wide array of products from the comfort of their homes.</p>

          <p>Since our inception, we have worked tirelesly to include a wide selection of high-quality products that cater to every taste and preference, from fashion and beauty to electronics and home essentials. We offer an extensive collection sourced from trusted brands and suppliers</p>
        
          <b className='text-gray-800'>Our Mission</b>

          <p>Our Mission at Nacodric is to empower Customers with choice, convienience, confidence and security to shop without worry. The customer can shop with peace of mind knowing that all their digital foot prints are secure and private while recieving a seamless shopping experience.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHHOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance :</b>
              <p className='text-gray-600'>We maticulously select and vet each product to ensure that it meets our stringent quality standards</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience :</b>
              <p className='text-gray-600'>With our user-friendly Interface and hassle-free ordering process, shopping has never been easier</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service :</b>
              <p className='text-gray-600'>Our teams of dedicated professionals are here to assist you in any way and ensure your satisfaction is our top priority</p>
          </div>
      </div>

      <NewsLaterBox />
    </div>
  )
}
