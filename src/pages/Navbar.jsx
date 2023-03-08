import React from 'react'
import Logo from '../assets/logo.png'
import Profile from '../assets/profile.png'

import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='flex fixed bg-[#fff] shadow-sm z-50 justify-between w-full px-[100px] items-center py-[15px] text-center border-b-2   '>
      <div className="flex mr-3 items-center ">
        <div className="flex w-[30px] h-[30px] mr-[10rem] items-center ">
          <img src={Logo} className='object-cover' />
          <h1 className=' ml-2 font-bold text-[20px]' >ACADEMY</h1>
        </div>

        <div className="">
          <ul className=' flex cursor-pointer'>
            <li className='mr-[30px] flex items-center text-[16px]'>
              Categoris
              <IoIosArrowDown className='text-[16px' />
            </li>
            <li className='mr-[30px]'>Teach</li>
            <li className='mr-[30px]'>ContactUs</li>
            <li className='mr-[30px]'>About</li>
          </ul>
        </div>
      </div>

      <div className="flex ">
        <div className="flex items-center relative mr-[1rem]">
          <input type="text" placeholder='Searc Anything' className='py-[10px] px-[10px] text-[13px] w-[10rem] bg-gray-300 border-none outline-none rounded-md' />
          <AiOutlineSearch className='absolute font-bold flex right-[13px] text-[20px] text-gray-400 text-bold' />
        </div>

        <div className="flex items-center  ">
          <span className='w-[1px] h-full  mr-[1rem] rounded-[5px] bg-gray-300'></span>
          <img src={Profile} className='rounded-md w-[55px] h-[55px] cursor-pointer' />
          <div className="text-left ml-2">
            <h2 className='text-[16px] font-semibold'>User Name</h2>
            <p className='text-[14px]'>UI/UX Designer</p>
          </div>
          <div className="bg-gray-300 py-[13px] px-[13px] cursor-pointer rounded-md ml-[16px]">
            <IoMdNotifications className='text-[#9E5CF2] text-[20px] ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar