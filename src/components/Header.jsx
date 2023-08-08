import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


function Header() {
  return (
    <div className='bg-sky-600 p-4'>
      <div className='max-w-[1240px] items-center flex justify-between mx-auto'>
        <div className='text-2xl font-bold'>
          Portfolio
        </div>
        <AiOutlineMenu className='text-white text-2xl md:hidden block'/>
        {/* <AiOutlineClose className='text-white text-2xl md:hidden block' /> */}
        <ul className='hidden md:flex text-white gap-5'>
          <li> Home </li>
          <li> About </li>
          <li> Contacts </li>
          <li> Carrer </li>
        </ul>

        <ul className='w-full h-screen md:hidden text-white gap-5 fixed bg-black left-0 top-[63px]'>
          <li className='p-5'> Home </li>
          <li className='p-5'> About </li>
          <li className='p-5'> Contacts </li>
          <li className='p-5'> Carrer </li>
        </ul>
      </div>
    </div>
  )
}

export default Header