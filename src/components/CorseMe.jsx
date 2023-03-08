import React from 'react'
import { motion } from 'framer-motion'

import cs1 from '../assets/cs1.png'
import cs2 from '../assets/cs2.png'
import cs3 from '../assets/cs3.png'
import cs4 from '../assets/cs4.png'

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'

import { BiBookBookmark } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { AiTwotoneTrophy } from 'react-icons/ai'

const CorseMe = () => {
  const courseMe = [
    {
      cs: cs1,
      profile: card1,
      title: 'Google Ads Training 2021: Profit with Pay',
      user: 'Jon Kantner',
      profesi: 'Programmer',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      letsgo: 'Lets Go'
    },
    {
      cs: cs2,
      profile: card2,
      title: 'Google Ads Training 2021: Profit with Pay',
      user: 'Jon Kantner',
      profesi: 'Programmer',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      letsgo: 'Lets Go'
    },
    {
      cs: cs3,
      profile: card3,
      title: 'Google Ads Training 2021: Profit with Pay',
      user: 'Jon Kantner',
      profesi: 'Programmer',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      letsgo: 'Lets Go'
    },
    {
      cs: cs4,
      profile: card4,
      title: 'Google Ads Training 2021: Profit with Pay',
      user: 'Jon Kantner',
      profesi: 'Programmer',
      lison: <BiBookBookmark />,
      lisonDes: 'Lesson : 6',
      studen: <FaUserAlt />,
      studenDes: 'Student : 198',
      beginer: <AiTwotoneTrophy />,
      bgeinerDes: 'Beginner',
      letsgo: 'Lets Go'
    },
  ]

  return (
    <div className='pt-[11rem]'>
      <h1 className='text-[18px] font-bold mb-[1rem]'>Your courses</h1>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        duration={{ duration: 0.5, delayChildren: 0.5 }}
        className='grid grid-cols-2 gap-3'
      >
        {courseMe.map((item, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='bg-gray-200 flex px-[0.8rem] pt-[0.5rem] pb-[0.9rem] rounded-md shadow-md'
            key={i}
          >
            <div className="w-[15rem] h-[10rem] flex">
              <img src={item.cs} className='object-cover rounded-md ' />
            </div>

            <div className="pt-[1rem]">
              <h1 className='truncate text-[13px] font-semibold mb-[1rem]'>{item.title}</h1>
              <div className="flex items-center justify-between text-[11px] text-gray-500">
                <div className="flex items-center gap-1 ">
                  <p className='text-[15px]'>{item.lison}</p>
                  <p>{item.lisonDes}</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <p className=''>{item.studen}</p>
                  <p>{item.studenDes}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className=' text-[15px]'>{item.beginer}</p>
                  <p>{item.bgeinerDes}</p>
                </div>
              </div>

              <div className="flex items-center pt-[2.7rem]">
                <div className="w-[2.5rem] h-[2.5rem] flex mr-1">
                  <img src={item.profile} className='object-cover rounded-md' />
                </div>
                <div className="flex justify-between w-full items-center ">
                  <div className="text-[14px]">
                    <p className='font-semibold'>{item.user}</p>
                    <p className='text-[12px] text-gray-500'>{item.profesi}</p>
                  </div>
                  <button className='bg-black text-white text-[12px] px-3 py-1 rounded-md hover:bg-[#B176F2] hover:text-black transition-all ease-in-out delay-100'>
                    {item.letsgo}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default CorseMe