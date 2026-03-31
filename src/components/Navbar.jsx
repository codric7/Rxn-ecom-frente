import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {

  const [visible, setIsVisible] = useState(false);

  const {setShowSearch,getCartCount} = useContext(ShopContext);


  return (
    <div className='flex justify-between items-center py-5 font-medium'>
     
     <Link to={'/'}>
      <img src={assets.nacodricLogo} alt="" id='logo1' className='w-38'/>
     </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden'/>
        </NavLink>

        <NavLink to="/collection" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden'/>
        </NavLink>

        <NavLink to="/about" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden'/>
        </NavLink>

        <NavLink to="/contact" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-6 cursor-pointer" alt=""/>

          <div className='group relative'>
            <Link to={'/login'}>
                <img src={assets.profile_icon} className='w-6 cursor-pointer' alt="" />
            </Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 border border-gray-300'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>LogOut</p>
                </div>
            </div>
          </div>
          <Link to="/Cart" className='relative'>
              <img src={assets.cart_icon} className="w-6 min-w-5 cursor-pointer" alt=""/>
              <p className='absolute top-0 right-[-10px] w-4 h-4 bg-red-500 rounded-full flex items-center leading-4 justify-center text-xs text-white aspect-square text-[10px]'>{getCartCount()}</p>
          </Link>

          <img onClick={() => setIsVisible(!visible)} src={assets.menu_icon} alt="" className='w-6 cursor-pointer sm:hidden'/>

      </div>

      {/* sidebar menu for smaller screen */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ease-in-out ${visible ? 'w-full' : 'w-0'}`}>

        {/* Close button */}
        <div className='flex justify-end p-5'>
            <img onClick={() => setIsVisible(!visible)} src={assets.cross_icon} alt="" className='w-6 cursor-pointer'/>
        </div>

        <div className='flex flex-col gap-5 text-sm text-gray-700 p-5'>
        <NavLink onClick={()=>setIsVisible(!visible)} to="/" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden'/>
        </NavLink>

        <NavLink onClick={()=>setIsVisible(!visible)} to="/collection" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden'/>
        </NavLink>

        <NavLink onClick={()=>setIsVisible(!visible)} to="/about" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden'/>
        </NavLink>

        <NavLink onClick={()=>setIsVisible(!visible)} to="/contact" className='flex flex-col gap-1 items-center hover:text-black'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-black hidden' />
        </NavLink>
        </div>

      </div>
    </div>
  )
}
