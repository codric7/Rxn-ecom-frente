import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <Link to={'/'}>
            <img src={assets.nacodricLogo} className='mb-5 w-32' alt="" />
          </Link>
            <p className='w-full md:w-2/3 text-gray-600'>
                Although my Road is not even clear, but i do not see any other option but steer
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to={'/'} className='font-bold cursor-pointer'>Home</Link>
                <Link to={'/about'} className='font-bold cursor-pointer'>About Us</Link>
                <Link>Delivery</Link>
                <Link>Privacy Policy</Link>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+254-717-112-458</li>
                <li>cimotaposi@gmail.com</li>
            </ul>
        </div>
      </div>
      
      {/* copyright */}
      <div>
        <hr />

        <p className='py-5 text-sm text-center'>Copyright &copy;{new Date().getFullYear()} Nacodric. All rights reserved</p>
      </div>
    </div>
  )
}
