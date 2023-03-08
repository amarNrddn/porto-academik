import React from 'react'
import logoAbout from '../assets/about-logo.png'
import presentase from '../assets/presentase.png'
import arrows from '../assets/arrows.png'
import ellipse from '../assets/Ellipse.png'
import ellipse1 from '../assets/Ellipse1.png'
import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'

import { motion } from 'framer-motion'

import { IoCodeSlashSharp } from 'react-icons/io5'
import { DiAndroid } from 'react-icons/di'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

const About = () => {

  const aboutItems = [
    { items: <IoCodeSlashSharp /> },
    { items: 'Python' },
    { items: 'React' },
    { items: 'Unity' },
    { items: <DiAndroid /> },
    { items: 'UI & UX' },
    { items: 'Vector' },
    { items: <AiOutlineVideoCamera /> },
    { items: 'After Effect' },
    { items: 'Lightroom' },
    { items: 'Photograpy' },
    { items: <IoIosArrowForward /> }
  ]

  return (
    <div className="pt-[5rem]">
      <div className='flex justify-between  pt-[25px] w-full '>
        {aboutItems.map((item, i) => (
          <button className='bg-gray-100 px-2 py-2 rounded-md shadow-sm mt-[1rem] mb-[1rem] hover:bg-[#B176F2] hover:text-black transition ease-in-out delay-150 hover:shadow-sm'
            key={i}
          >
            <a className='text-[13px] font-bold'>
              {item.items}
            </a>
          </button>
        ))}
      </div>

      <div className="flex pt-[3rem] ">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          duration={{ duration: 0.5 }}
          className='w-[674px]  items-center m-auto'
        >
          <h1 className='text-[36px] font-bold'><span>🙌 </span> Hello Friends Im Sofia And we Want to Start a <span className='text-[#B176F2]'>Web Desigin </span> Course Together. do You Like it Too 😍 ? </h1>

          <div className="flex pt-[3rem] items-center  relative">
            <div className="mr-[1rem]">
              <button className='flex items-center bg-black text-[white] py-2 px-3 rounded-md'>
                Start Coursenow
                <IoIosArrowForward />
              </button>
            </div>
            <div className=" flex items-center ">
              <img src={presentase} alt="" className='w-[40px] h-[40px] mr-[10px]' />
              <img src={arrows} alt="" className='object-cover w-[60px] h-[60px]' />

              <div className=" rounded-[20px] bg-gradient-to-r from-green-400 to-blue-500 absolute top-[1.8rem] left-[17rem] rotate-45  py-2 px-2 ">
                <p className='text-[#FF991F] opacity-none font-bold '>Booked</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          duration={{ duration: 0.5, delayChildren: 0.5 }}
          className='relative flex '
        >
          <img src={logoAbout} alt="" className='z-10 flex flex-1 pt-[5rem] pr-[1rem]' />

          <motion.img
            whileInView={{ scale: [0, 1] }}
            duration={{ duration: 1, ease: 'easeInOut' }}
            src={ellipse}
            className='absolute top-[1rem] left-[3rem] right-0 bottom-[0] w-[450px] h-[450px] z-0'
          />

          <motion.img
            whileInView={{ scale: [0, 1] }}
            duration={{ duration: 1, ease: 'easeInOut' }}
            src={ellipse1}
            className='absolute top-10 left-[8.7rem]'
          />

          <motion.img
            whileInView={{scale: [0,1]}}
            duration={{duration: 1, ease: 'easeInOut'}}
            src={frame1}
            className='absolute top-[1rem] right-[5rem]'
          />

          <motion.img
            whileInView={{scale: [0,1]}}
            duration={{duration: 1, ease: 'easeInOut'}}
            src={frame2}
            className='absolute bottom-[5.8rem] left-[1rem] '
          />

          <motion.img
            whileInView={{scale: [0,1]}}
            duration={{duration: 1, ease: 'easeInOut'}}
            src={frame3}
            className='absolute top-[50%] right-0'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About