import React from 'react'

const Bener = () => {
  return (
    <div className='flex relative justify-between bg-gray-200 items-center rounded-br-[20px] rounded-tr-[20px] mt-[9rem] rounded-md'>
      <div className="w-[400px] border-red-400 pl-2">
        <h1 className='font-bold text-[18px]'>Find out about the latest courses with the <span className='text-[#5A69F2] text-left'>academy </span>newsletter</h1>
      </div>
      <div className="">
        <div className="flex items-center bg-[#5A69F2] w-[15rem] h-[10rem] rounded-br-[20px] rounded-tr-[20px] rounded-tl-[40px] rounded-bl-[80px] ">
          <div className=" absolute right-[6rem] ">
            <div className="relative flex items-center">
              <input 
              type='text' 
              placeholder='Emeail Addres...' 
              className='w-[16rem] outline-none text-[12px] py-2 px-3 rounded-md'
              />
              <button className='absolute right-1 text-[12px] py-1 px-2 rounded-md bg-black text-white'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bener