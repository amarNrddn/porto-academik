import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsFunnelFill } from 'react-icons/bs'
import { BiBookBookmark } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { AiTwotoneTrophy } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'

import corse1 from '../assets/corse1.png'
import corse2 from '../assets/corse2.png'
import corse3 from '../assets/corse3.png'
import corse4 from '../assets/corse4.png'
import corse5 from '../assets/corse5.png'
import corse6 from '../assets/corse6.png'
import corse7 from '../assets/corse7.png'
import corse8 from '../assets/corse8.png'

const Course = () => {
  const menuCorses = [
    { menu: 'All Corse' },
    { menu: 'Dsigin' },
    { menu: 'Development' },
    { menu: 'Photography' },
    { menu: 'Mussic' },
    { menu: <BsFunnelFill /> },
  ]

  const courses = [
    {
      img: corse1,
      title: 'Learn Figma - UI/UX Design Essential Training',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
    {
      img: corse2,
      title: 'Python for Beginners - Learn Programming ',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
    {
      img: corse3,
      title: 'Acoustic Guitar and Electric Guitar Started',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
    {
      img: corse4,
      title: 'Mobile App Development with Flutter & Dart',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
    {
      img: corse5,
      title: 'onic React: Mobile Development with Ionic',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
    {
      img: corse6,
      title: 'Sports Management: The Essentials Course',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
    {
      img: corse7,
      title: 'How to Market Yourself as a Consultant',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
    {
      img: corse8,
      title: 'Become a Product Manager | Learn the Skills',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      start: 'Start Course'
    },
  ]

  return (
    <div className='pt-[8rem]'>
      <div className="flex justify-center ">
        <h1 className='text-center w-[30rem] font-bold text-[30px]'>Search Among <span className='text-[#B176F2]'>58340 </span>Courses And Find Your Favorite Course</h1>
      </div>

      <div className="flex justify-center items-center pt-[1rem]">
        <div className="relative w-[27rem] flex items-center">
          <input type='text' placeholder='Search Anything' className='py-[0.8rem] w-[27rem] outline-none bg-gray-100 rounded-md pl-[7rem] text-[12px] ' />
          <button className='absolute left-0 py-[0.5rem] px-[1.2rem] text-[12px] bg-black rounded-md text-white'>
            Categories
          </button>
          <AiOutlineSearch className='absolute right-[1rem] text-gray-400 font-bold text-[20px] ' />
        </div>

        <div className="ml-[1rem]">
          <p className='text-[16px] text-gray-500'>or View The Following courses...</p>
        </div>
      </div>

      <div className="flex justify-between mt-[8rem] items-center ">
        <h1 className='font-bold text-[18px]'>New Corses</h1>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='flex gap-2'
        >
          {menuCorses.map((menu, i) => (
            <button key={i} className='flex bg-gray-100 py-[5px] px-[13px] text-[12px] font-semibold items-center rounded-md hover:bg-[#B176F2] hover:text-white transition ease-in-out delay-150'>
              {menu.menu}
            </button>
          ))}
        </motion.div>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        duration={{ duration: 0.5, delayChildren: 0.5 }}
        className="grid grid-cols-4 gap-3 pt-[1.8rem] w-full"
      >
        {courses.map((item, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='bg-gray-100 pt-[10px] px-[10px] rounded-md shadow-md'
            key={i}
          >
            <img src={item.img} className='rounded-md' />
            <p className='text-[17px] font-bold truncate mt-[1rem]'>{item.title}</p>

            <div className="flex items-center justify-between text-[11px] text-gray-500 mt-[0.8rem]">
              <div className="flex items-center gap-1">
                <p className='text-[15px]'>{item.lison}</p>
                <p>{item.lisonDes}</p>
              </div>
              <div className="flex items-center gap-1">
                <p>{item.studen}</p>
                <p>{item.studenDes}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className='text-[15px]'>{item.beginer}</p>
                <p>{item.bgeinerDes}</p>
              </div>
            </div>

            <button className='flex items-center bg-black text-white py-[5px] px-[8px] rounded-md text-[12px] mt-[1rem] mb-[1rem] hover:bg-[#B176F2] hover:text-black transition ease-in-out delay-150'>
              <a>{item.start}</a>
              <IoIosArrowForward />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div >
  )
}

export default Course