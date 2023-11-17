import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletScreenButton, faMobileScreenButton, faTelevision } from '@fortawesome/free-solid-svg-icons';
import TypeWriterEffect from 'react-typewriter-effect';
import BlogPosts from './BlogPost';
import Works from '../components/Works';
import About from '../components/About';
import { Link, animateScroll as scroll} from "react-scroll";
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';




const Header =["About", "Works", "Skills", "Contact"]
const img = ['/images/Rectangle 46.png', '/images/Rectangle 10.png','/images/Rectangle 6.png','/images/Rectangle 47.png','/images/Rectangle 46.png']

function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const divRef = useRef(null);
  const [bottom, setBottom] =useState(false)
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

  

  useEffect(() => {
    const checkDivPosition = () => {
      const rect = divRef.current.getBoundingClientRect();
      if (rect.bottom <= 0) {
        setBottom(true);
        console.log('Div의 끝이 화면 맨 위에 도달했습니다!');
        // 여기에 원하는 로직을 실행하세요.
      }else{
        setBottom(false)
      }
    };

    window.addEventListener('scroll', checkDivPosition);

    return () => {
      window.removeEventListener('scroll', checkDivPosition);
    };
  }, []);

  return (
    <>
    
    <div>
    <button onClick={() => openWindow(1280, 1024)} style={{ color: windowWidth >= 1280 && 'green' }} className='text-4xl fixed text-gray-500 right-[90px] z-50 opacity-60'><FontAwesomeIcon icon={faTelevision}/></button>
    <button onClick={() => openWindow(768, 1024)} style={{ color: windowWidth <= 768 && windowWidth > 420 && 'green' }} className='text-4xl fixed text-gray-500 right-10 z-50 opacity-60'><FontAwesomeIcon icon={faTabletScreenButton}/></button>
    <button onClick={() => openWindow(420, 667)} style={{ color: windowWidth <= 420  && 'green' }} className='text-4xl fixed  text-gray-500 right-0 z-50 opacity-60'><FontAwesomeIcon icon={faMobileScreenButton}/></button>    
    <div className="overflow-hidden ">    
      <div ref={divRef} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/IMG_8441.png'})`}} className='bg-cover bg-center bg-no-repeat h-screen w-screen'>
      <div className='' style={bottom === true ? { backgroundColor:'white'} : null} >   
      <ul className='flex ml-[20%] justify-end mr-14 py-6  relative sm:right-10 font-bold transition-all duration-300 ' style={bottom === true ? { position: 'fixed', color: 'black',zIndex:'50', transform: 'translateX(-10%)'} : null}>
        {/* <li className='absolute left-7 top-[32px] after:absolute after:w-[2px] after:h-[120px] after:bg-black after:-right-[32px] after:-top-10'>
        </li> */}
        {
          Header.map((e,i)=>{
            return(
              <>              
            <li key={i}  className='basis-[10%] px-4 cursor-pointer shadow-lg rounded-full' ><Link to={i} spy={true} smooth={true} offset={-100}>
                <p style={bottom === true ? { color: 'black',zIndex:'50'} : null} className={`md:text-xl lg:text-2xl text-left text-white font-bold `}>{e}</p>       
            </Link>
            </li>
            {/* <li key={i}  className='basis-[10%] md:px-4 cursor-pointer ' ><Link to={i} spy={true} smooth={true} offset={-100}>
                 <p style={bottom === true ? { position: 'fixed', color: 'black',zIndex:'50', transform: 'translateX(-0%)'} : null} className={`md:text-xl lg:text-2xl text-left text-white font-bold `}>{e}</p>       
              </Link>
            </li> */}           
            </>
          
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