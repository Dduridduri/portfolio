import React, { useEffect, useState } from 'react'

function Footer() {
  const [commit, setCommit] =useState('');
  const repo = 'Dduridduri/portfolio';

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch(`https://api.github.com/repos/${repo}/commits`)
      const data = await res.json();
      const lastCommit = data[0];
      console.log(lastCommit.commit.committer.date)
      setCommit(lastCommit.commit.committer.date)
      }
      fetchData();
      },[])
      
      const date = new Date (commit);
      // date.setHours(date.getHours()+9)
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().
      padStart(2, '0');
      const day = date.getDate(). toString(). padStart(2, '0')
      const hours = date.getHours(). toString(). padStart(2, '0')
      const minutes = date.getMinutes(). toString(). padStart(2, '0')
      const seconds = date.getSeconds(). toString(). padStart(2, '0')
      const formatDate = `${year}-${month}-${day}:${hours}:${minutes}`

  return (    
    <div className="w-full h-60 mt-20 bg-[#111] relative" id='3'>
    <ul className='flex justify-between py-10'>
      <li className='basis-[70%] px-4'>
        <p className="text-2xl font-bold text-left text-white">CONTACT</p>
      </li>
      <li className='basis-[10%] px-4'>
        <p className="text-2xl font-bold text-left text-white"><a href="https://github.com/Dduridduri/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </li>
      <li className='basis-[10%] px-4'>
        <p className="text-2xl font-bold text-left text-white">KakaoTalk</p>
      </li>
      <li className='basis-[10%] px-4'>
        <p className=" text-2xl font-bold text-left text-white">Email</p>
      </li>
        
    </ul>
        <p className="text-xl font-bold text-center mt-8">
          <span className="text-xl font-bold text-left text-[#8e8e8e]">Made by</span>
          <span className="text-xl font-bold text-left text-white"> Ki woon</span>
        </p>
        <p className="text-xl font-bold text-center text-[#8e8e8e]">ⓒ kiwoon.net</p>
        <p className="absolute bottom-0 text-xl font-bold text-right text-[#8e8e8e] right-10">마지막 업데이트:{formatDate}</p>    
    </div>
  )
}

export default Footer