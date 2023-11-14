import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TypeWriterEffect from 'react-typewriter-effect';
import BlogPosts from './BlogPost';
import Works from '../components/Works';
import About from '../components/About';


const Header =["About", "Works", "Skills", "Contact"]
const img = ['/images/Rectangle 46.png', '/images/Rectangle 10.png','/images/Rectangle 6.png','/images/Rectangle 47.png','/images/Rectangle 46.png']

function Main() {
  const [isActive, SetIsActive] = useState('hidden');

  return (
    <>
    

    <div className="w-[px] relative overflow-hidden">
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/IMG_8441.png'})`}} className='bg-cover bg-center bg-no-repeat h-screen w-screen'>
      <div className='' >   
      <ul className='flex ml-[20%] justify-end mr-14 py-10  relative '>
        {/* <li className='absolute left-7 top-[32px] after:absolute after:w-[2px] after:h-[120px] after:bg-black after:-right-[32px] after:-top-10'>
        </li> */}
        {
          Header.map((e,i)=>{
            return(
              <li key={i} className='basis-[10%] px-4 '>
              <p className="text-2xl text-left text-white ">{e}</p>       
            </li>
            )
          })
        }
      </ul>  
    </div>
    {/* 헤더끝 */}
    <div className='w-[1520px] h-auto mx-auto ' >      
      <div className=''>
        <p className="text-7xl md:text-8xl lg:text-[150px] font-bold text-left text-white py-5">
            <TypeWriterEffect
            textStyle={{ fontFamily: 'Redressed' }}
            startDelay={500}
            cursorColor="transparent"
            multiText={[
              'Front-End',
              '프론트 엔드',
            ]}
            multiTextDelay={3000}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            multiTextLoop={true}/>          
        </p>
        <p className="text-7xl md:text-8xl lg:text-[150px] font-bold text-left text-white leading-4 ml-20 py-5">
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Redressed' }}
            startDelay={800}
            cursorColor="transparent"
            multiText={[
              'Developer',
              '개발자',
            ]}
            multiTextDelay={3500}
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
            multiTextLoop={true}/> 
          </p>
        <p className="text-7xl md:text-8xl lg:text-[150px] font-bold text-left text-transparent-fill text-stroke text-white">
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Redressed' }}
            startDelay={1100}
            cursorColor="transparent"
            multiText={[
              'KI Woon',
              'KI Woon',
              
            ]}
            multiTextDelay={4000}
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1000}
            multiTextLoop={true}/>  
        </p>
      
        <div className='w-sreen' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/IMG_8441.png'})`}}></div>
       </div>
     </div>
    </div>
      {/* 메인 이미지 */}
  

  <About/>

  

  <BlogPosts/>

  <div className="w-[1520px] mx-auto ">
  <h3 className=" text-5xl font-bold text-left text-black">
      My Works
  </h3>
    <Works/>
    </div>
    <div className='mx-auto w-[1520px] flex justify-center'>

    </div>
    


    <div className="w-full h-60 mt-20 bg-[#111]">
    <ul className='flex justify-between py-10'>
      <li className='basis-[70%] px-4'>
        <p className="text-2xl font-bold text-left text-white">CONTACT</p>
      </li>
      <li className='basis-[10%] px-4'>
        <p className="text-2xl font-bold text-left text-white">Instagram</p>
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
    
    </div>
  </div>
  </>
  )

}

export default Main