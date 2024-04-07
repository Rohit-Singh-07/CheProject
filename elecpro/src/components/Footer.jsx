import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-[100vw] h-[35vh] bg-zinc-900 text-white flex justify-between px-[15vw] py-[3vw] items-center'>
      <div className='h-[80%] flex items-start'>
        <h1 className='text-[3vw] font-bold'>
            Get in Touch
        </h1>
      </div>
      <div className='flex gap-[4vw]'>
        <Link to="/about">
        <div className='h-[12vw] w-[12vw] bg-zinc-800 flex justify-center items-center text-[1.8vw] rounded-br-xl rounded-tl-xl shadow-[19px_22px_3px_3px_#2d3748]'>
            About <br />US
        </div>
        </Link>
        <div className='h-[12vw] w-[12vw] bg-zinc-800 flex justify-center items-center text-[1.8vw] rounded-br-xl rounded-tl-xl shadow-[19px_22px_3px_3px_#2d3748]' >
            Project <br />Link
        </div>
      </div>
    </div>
  )
}

export default Footer
