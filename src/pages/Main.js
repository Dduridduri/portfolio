import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletScreenButton, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import TypeWriterEffect from 'react-typewriter-effect';
import BlogPosts from './BlogPost';
import Works from '../components/Works';
import About from '../components/About';
import { Link, animateScroll as scroll} from "react-scroll";

import Footer from '../components/Footer';
import { useEffect } from 'react';




const Header =["About", "Works", "Skills", "Contact"]
const img = ['/images/Rectangle 46.png', '/images/Rectangle 10.png','/images/Rectangle 6.png','/images/Rectangle 47.png','/images/Rectangle 46.png']

function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openWindow = (width, height) => {
    // 현재 페이지의 URL
    const pageUrl = window.location.href;

    // 새 창을 열고, 지정된 크기로 설정
    window.open(pageUrl, '', `width=${width},height=${height}`);
  };
  const getButtonStyle = (width) => {
    return windowWidth <= width ? { color : 'green' } : {};
  };

  return (
    <>
    
    <div>
    <button onClick={() => openWindow(768, 1024)} style={{ color: windowWidth <= 768 && windowWidth > 640 && 'green' }} className='text-4xl fixed text-gray-500 right-0 z-50'><FontAwesomeIcon icon={faTabletScreenButton}/></button>
    <button onClick={() => openWindow(420, 667)} style={{ color: windowWidth <= 640  && 'green' }} className='text-4xl fixed  text-gray-500 right-10 z-50'><FontAwesomeIcon icon={faMobileScreenButton}/></button>    
    <div className="overflow-hidden ">    
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/IMG_8441.png'})`}} className='bg-cover bg-center bg-no-repeat h-screen w-screen'>
      <div className='' >   
      <ul className='flex ml-[20%] justify-end mr-14 py-10  relative '>
        {/* <li className='absolute left-7 top-[32px] after:absolute after:w-[2px] after:h-[120px] after:bg-black after:-right-[32px] after:-top-10'>
        </li> */}
        {
          Header.map((e,i)=>{
            return(
              <li key={i}  className='basis-[10%] px-4 cursor-pointer ' ><Link to={i} spy={true} smooth={true} offset={-100}>
                <p className="xl:text-2xl  text-left text-white ">{e}</p>       
              </Link>
            </li>
            )
          })
        }
      </ul>  
    </div>
    {/* 헤더끝 */}
    <div className='w-[1520px] h-auto mx-auto ' >      
      <div className=''>
        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold text-left text-white py-5 px-4">
            <TypeWriterEffect
            textStyle={{ fontFamily: 'Redressed' }}
            startDelay={500}
            cursorColor= "transparent"            
            multiText={[
              'Front-End',
              '프론트 엔드',
            ]}
            multiTextDelay={3500}
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1500}
            multiTextLoop={true}/>          
        </p>
        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold text-left text-white leading-4 sm:ml-20 py-5 px-4">
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Redressed' }}
            startDelay={500}
            cursorColor="transparent"
            multiText={[
              'Developer',
              '개발자',
            ]}
            multiTextDelay={3500}
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1500}
            multiTextLoop={true}/> 
          </p>
        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold text-left text-transparent-fill text-stroke text-white px-4 pt-2">
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
            delaySpeed={1500}
            multiTextLoop={true}/>  
        </p>
      
        <div className='w-sreen' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/IMG_8441.png'})`}}></div>
       </div>
     </div>
    </div>
      {/* 메인 이미지 */}
  

  <About  />

  

  <BlogPosts/>

  <div className="w-[1520px] mx-auto ">
  <h3 className=" text-5xl font-bold text-left text-black px-4">
      My Works
  </h3>
    <Works/>
    </div>
    <div className='mx-auto w-[1520px] flex justify-center'>
    </div>
      <Footer/> 
    </div>
    </div>
    
  </>
  )

}

export default Main