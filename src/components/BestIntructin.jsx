import React from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowForward } from 'react-icons/io'

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
import presentase from '../assets/presentase.png'
import arrows from '../assets/arrows.png'

const BestIntructin = () => {
  const cardIntruktions = [
    {
      img: card1,
      user: 'Jon Kantner',
      profesi: 'Programmer'
    },
    {
      img: card2,
      user: 'Jon Kantner',
      profesi: 'Programmer'
    },
    {
      img: card3,
      user: 'Jon Kantner',
      profesi: 'Programmer'
    },
    {
      img: card4,
      user: 'Jon Kantner',
      profesi: 'Programmer'
    },
    {
      img: card5,
      user: 'Jon Kantner',
      profesi: 'Programmer'
    },
    {
      img: card6,
      user: 'Jon Kantner',
      profesi: 'Programmer'
    },
  ]

  return (
    <div className='flex justify-between items-center pt-[10rem]'>
      <div className="">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          duration={{ duration: 0.5 }}
          className='w-[409px]'
        >
          <h1 className='text-[28px] font-bold'><span className='text-[#B176F2]'>Best </span>Instructors</h1>
          <p className='my-[15px] text-gray-500'>At the Academy, we strive to bring together the best professors for the best courses</p>
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          duration={{ duration: 0.5 }}
        >
          <div className="flex pt-[3rem] items-center  relative">
            <div className="mr-[1rem]">
              <button className='flex items-center bg-black text-[white] py-2 px-3 rounded-md'>
                All Instructors
                <IoIosArrowForward />
              </button>
            </div>
            <div className=" flex items-center ">
              <img src={presentase} alt="" className='w-[40px] h-[40px] mr-[10px]' />
              <img src={arrows} alt="" className='object-cover w-[60px] h-[60px]' />

              <div className=" rounded-[20px] bg-gradient-to-r from-green-400 to-blue-500 absolute top-[2rem] left-[14rem] rotate-45  py-2 px-2 ">
                <p className='text-[#fff] opacity-none text-[12px]  '>54 Instructors</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        duration={{ duration: 0.5 }}
        className='w-[500px] h-[200px] bg-[#FEDEFF] flex flex-1 abslute items-center rounded-md px-[1rem] justify-end '
      >
        <motion.div
          className='grid grid-cols-3 gap-3 '
        >
          {cardIntruktions.map((item, i) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={i}
              className='px-[10px] pt-[10px] bg-gray-200 rounded-md shadow-md'
            >
              <img src={item.img} alt="" />
              <div className="flex justify-between text-[12px] mt-[10px] mb-[15px]">
                <p>{item.user}</p>
                <p>{item.profesi}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BestIntructin