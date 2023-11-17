import React, { useEffect, useState } from 'react'

function Footer() {

  return (    
    <div className="w-full h-60 mt-20 bg-[#111] relative" id='3'>
    <ul className='flex justify-between py-10'>
      <li className='basis-[70%] px-4'>
        <p className="sm:text-2xl font-semibold text-left text-white ">CONTACT</p>
      </li>
      <li className='basis-[10%] px-4'>
        <p className="sm:text-2xl font-semibold text-left text-gray-400 hover:text-white"><a href="https://github.com/Dduridduri" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </li>
      <li className='basis-[10%] px-4'>
        <p className="sm:text-2xl font-semibold text-left  text-gray-400 hover:text-white">KakaoTalk</p>
      </li>
      <li className='basis-[10%] px-4'>
        <p className="sm:text-2xl font-semibold text-left  text-gray-400 hover:text-white">Email</p>
      </li>
        
    </ul>
        <p className="sm:text-xl font-bold text-center mt-8">
          <span className="sm:text-xl font-bold text-left text-[#8e8e8e] ">Made by</span>
          <span className="sm:text-xl font-bold text-left text-white "> Ki woon</span>
        </p>
        <p className="sm:text-xl font-bold text-center text-[#8e8e8e]">ⓒ kiwoon.net</p>
        {/* <div className='absolute right-[6%] bottom-0'>
        <p className="bottom-10 text-xl font-bold text-right text-[#8e8e8e] right-[6%]">업데이트 : {formatDate}</p>    
        <p className="bottom-0 text-sm font-bold text-right text-[#8e8e8e] right-[6%]">{commitMessage}</p>    
        </div> */}
    </div>
  )
}

export default Footer