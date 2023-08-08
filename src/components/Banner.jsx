import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
    <div className='bg-sky-600 w-full py-[100px] p-4 '>
      <div className='max-w-[1240px] mx-auto text-center font-bold'>
        <div className='text-xl md:text-2xl '>About Me</div>
        <h2 className='text-white text-3xl md:text-5xl p-4'>Hari Nagle</h2>
        <h3 className='text-xl md:text-[30px] text-white'>
        I am 
        <Typed 
          className='pl-2'
          strings= {['Web developer', 'Frontend developer', 'Fullstack developer']}
          typeSpeed={200}
          loop={true}
          backSpeed={50}
        />
        </h3>

      </div>
    </div>
  )
}

export default Banner 