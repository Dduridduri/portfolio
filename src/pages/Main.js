import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TypeWriterEffect from 'react-typewriter-effect';
import BlogPosts from './BlogPost';

const Header =["About", "Works", "Skills", "Contact"]
const img = ['/images/Rectangle 46.png', '/images/Rectangle 10.png','/images/Rectangle 6.png','/images/Rectangle 47.png','/images/Rectangle 46.png']

function Main() {
  const [isActive, SetIsActive] = useState('hidden');

  return (
    <>
    

    <div className="w-[px] relative overflow-hidden">
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/IMG_8441.png'})`}} className='h-screen'>
      <div className='border-b-2 border-white' >   
      <ul className='flex ml-[20%] justify-end mr-14 py-10 relative '>
        {/* <li className='absolute left-7 top-[32px] after:absolute after:w-[2px] after:h-[120px] after:bg-black after:-right-[32px] after:-top-10'>
        </li> */}
        {
          Header.map((e,i)=>{
            return(
              <li key={i} className='basis-[10%]  '>
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
        <p className="text-[150px] font-bold text-left text-white py-5">
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
        <p className=" text-[150px] font-bold text-left text-white leading-4 ml-20 py-5">
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
        <p className="absolute text-[150px] font-bold text-left text-transparent-fill text-stroke">
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
    

  <div className="border-2 w-[1520px] mx-auto mt-20">
    <div className='border-2 flex justify-between w-[90%] mx-auto'>
      <p className=" text-5xl font-bold text-left text-black basis-[61%]">
      ABOUT ME
      </p>
      <p className=" basis-[20%] mr-auto text-base font-bold text-left text-black">
      anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.
      </p>
    </div>
    <div className='h-[300px]'>
      
    </div>
    <div className='w-[90%] flex relative justify-between mx-auto'>
        <p className=" my-auto text-2xl font-bold text-left text-black basis-[60%] relative pt-5 after:absolute after:w-40 after:h-[1px] after:bg-black after:left-32 after:top-10">
        Follow me
        </p>
        <p className=" basis-[40%] text-2xl font-bold text-left text-black">
          <span className="text-2xl font-bold text-left text-black">
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
          </span>
            <br />
          <span className="text-2xl font-bold text-left text-black">
            Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un
          </span>
            <br />
            <br />
            <span className="w-text-2xl font-bold text-left text-black"> </span>
            <br />
            <span className="w-[551px] text-2xl font-bold text-left text-black">
              anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo
              campione.
            </span>
        </p>
            <button className=" bottom-0 absolute bg-[#111] px-10 py-2.5">
              <p className=" text-base font-bold text-left text-white">Contact me</p>
            </button>  
    </div>
      <p className="text-[32px] text-left text-black"></p>
  </div>

  <BlogPosts/>

  <div className="w-[1520px] mx-auto border-2">
  <h3 className=" text-5xl font-bold text-left text-black">
      My Works
  </h3>
    
    {
      Array(2).fill().map((_,i)=>{
        return(          
          <ul key={i} className={`w-full  ${i++ >= 1 ? `${isActive}` : 'flex flex-wrap justify-between' } `} >

            {
              img.map((e,i)=>{
                return(
                  <>
                  <li className='first:basis-full mt-10'>
                    <img src={process.env.PUBLIC_URL + `${e}`} className="w-full h-[410px]"/>
                    <p className="mt-3 text-4xl font-bold text-left text-black">Page 0{i+1}</p></li>
                  </>
                )
              })
            }
          </ul>
        )

      })
    }
    </div>
    <div className='mx-auto w-[1520px] flex justify-center'>
    <button className={`mt-20 w-4/5 h-24 rounded-[50px] bg-[#111] text-4xl font-bold ${isActive === 'hidden' ? 'text-white' : 'text-gray-400 text-opacity-40'} text-center `} onClick={()=>{isActive ==='hidden' ?SetIsActive("flex flex-wrap justify-between") : SetIsActive('hidden')}}>
      + More Works
      </button> 
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