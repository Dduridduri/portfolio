import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TypeWriterEffect from 'react-typewriter-effect';


const Header =["About", "Works", "Skills", "Contact"]
const img = ['/images/Rectangle 46.png', '/images/Rectangle 10.png','/images/Rectangle 6.png','/images/Rectangle 47.png','/images/Rectangle 46.png']

function Main() {
  const [isActive, SetIsActive] = useState('hidden');

  return (
    <>
    

    <div className="w-[px] relative overflow-hidden bg-white">
    <div className='border-b-2 border-black '>
      <ul className='flex justify-center py-10 relative '>
        <li className='absolute left-7 top-[32px] after:absolute after:w-[2px] after:h-[120px] after:bg-black after:-right-[32px] after:-top-10'>
        <p className="font-bold">
          <span className="text-4xl font-bold text-left text-white text-transparent-fill text-stroke">K.</span>
          <span className="text-4xl font-bold text-left text-[#111]">Woon</span>
        </p>
        </li>
        {
          Header.map((e,i)=>{
            return(
              <li key={i} className='basis-[10%]  '>
              <p className="text-2xl text-left text-[#111] ">{e}</p>       
            </li>
            )
          })
        }
      </ul>  
    </div>
    {/* 헤더끝 */}
    <div className='w-[1520px] h-auto mx-auto my-[] border-2'>      
      <div className='ml-10'>

        <p className="text-[150px] font-bold text-left text-[#111] py-5">
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
        <p className=" text-[150px] font-bold text-left text-black leading-4 ml-20 py-5">
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
      </div>
      <img src={process.env.PUBLIC_URL + '/images/Rectangle 3.png'}
        className="mt-[8%]" />
    </div>
      {/* 메인 이미지 */}
    
  {/* <img
    src={process.env.PUBLIC_URL + '/images/Rectangle 4.png'}
    className="w-[1520px] h-[820px] absolute left-[205px] top-[2087px] opacity-50 object-none"
  /> */}

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
  
  <div className='w-[1520px] mt-20 border-2 mx-auto'>
    <svg width={905} height={820} viewBox="0 0 905 820" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80" preserveAspectRatio="none">
      <path opacity="0.8" d="M0 0H733.5L905 820H0V0Z" fill="#111111" />
    </svg>
    <img src={process.env.PUBLIC_URL + '/images/Image 1.png'} className="w-20 h-20 absolute left-[289px] top-[2334px] object-cover" />
    <img src={process.env.PUBLIC_URL + '/images/Image 3.png'} className="w-20 h-20 absolute left-[422px] top-[2334px] object-cover" />
    <img src={process.env.PUBLIC_URL + '/images/Image 4.png'} className="w-20 h-20 absolute left-[563px] top-[2334px] object-cover" />
    <img
      src={process.env.PUBLIC_URL + '/images/Image 5.png'}
      className="w-[92px] h-20 absolute left-[835px] top-[2334px] object-cover"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Image 6.png'}
      className="w-[130.78px] h-20 absolute left-[292px] top-[2469px] object-cover"
    />
    <img src={process.env.PUBLIC_URL + '/images/Image 7.png'} className="w-20 h-20 absolute left-[704px] top-[2334px] object-cover" />
    <img
      src={process.env.PUBLIC_URL + '/images/Image 8.png'}
      className="w-[196.92px] h-10 absolute left-[478px] top-[2509px] object-cover"
    />
    <img src={process.env.PUBLIC_URL + '/images/Image 10.png'} className="w-20 h-20 absolute left-[704px] top-[2469px] object-cover" />
    <img
      src={process.env.PUBLIC_URL + '/images/Image 11.png'}
      className="w-[53.34px] h-20 absolute left-[854px] top-[2489px] object-cover"
    />
    <img src={process.env.PUBLIC_URL + '/images/Image 12.png'} className="w-20 h-20 absolute left-[289px] top-[2629px] object-cover" />
    <p className="absolute left-[293px] top-[2222px] text-5xl font-bold text-left text-white">
      My Skills
    </p>
    <div className="w-[266px] h-[266px] absolute left-[927px] top-[2774px] bg-white border border-black" />
    <div className="w-[266px] h-[266px] absolute left-[1193px] top-[2774px] bg-white border border-black" />
    <div className="w-[266px] h-[266px] absolute left-[1459px] top-[2774px] bg-white border border-black" />
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[60px] h-[60px] absolute left-[948px] top-[2798px]"
      preserveAspectRatio="none"
    >
      <path
        d="M7.5 3.75C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5V37.5C3.75 38.4946 4.14509 39.4484 4.84835 40.1516C5.55161 40.8549 6.50544 41.25 7.5 41.25H43.4475C45.4365 41.2504 47.3438 42.0409 48.75 43.4475L56.25 50.9475V7.5C56.25 6.50544 55.8549 5.55161 55.1516 4.84835C54.4484 4.14509 53.4946 3.75 52.5 3.75H7.5ZM52.5 0C54.4891 0 56.3968 0.790176 57.8033 2.1967C59.2098 3.60322 60 5.51088 60 7.5V55.4738C59.9999 55.8448 59.8898 56.2074 59.6835 56.5158C59.4772 56.8242 59.1841 57.0644 58.8413 57.2062C58.4984 57.3479 58.1212 57.3847 57.7574 57.312C57.3936 57.2392 57.0595 57.0602 56.7975 56.7975L46.0988 46.0988C45.3957 45.3954 44.442 45.0002 43.4475 45H7.5C5.51088 45 3.60322 44.2098 2.1967 42.8033C0.790176 41.3968 0 39.4891 0 37.5V7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0L52.5 0Z"
        fill="black"
      />
      <path
        d="M18.75 22.5C18.75 23.4946 18.3549 24.4484 17.6516 25.1516C16.9484 25.8549 15.9946 26.25 15 26.25C14.0054 26.25 13.0516 25.8549 12.3483 25.1516C11.6451 24.4484 11.25 23.4946 11.25 22.5C11.25 21.5054 11.6451 20.5516 12.3483 19.8484C13.0516 19.1451 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 19.1451 17.6516 19.8484C18.3549 20.5516 18.75 21.5054 18.75 22.5ZM33.75 22.5C33.75 23.4946 33.3549 24.4484 32.6516 25.1516C31.9484 25.8549 30.9946 26.25 30 26.25C29.0054 26.25 28.0516 25.8549 27.3484 25.1516C26.6451 24.4484 26.25 23.4946 26.25 22.5C26.25 21.5054 26.6451 20.5516 27.3484 19.8484C28.0516 19.1451 29.0054 18.75 30 18.75C30.9946 18.75 31.9484 19.1451 32.6516 19.8484C33.3549 20.5516 33.75 21.5054 33.75 22.5ZM48.75 22.5C48.75 23.4946 48.3549 24.4484 47.6516 25.1516C46.9484 25.8549 45.9946 26.25 45 26.25C44.0054 26.25 43.0516 25.8549 42.3484 25.1516C41.6451 24.4484 41.25 23.4946 41.25 22.5C41.25 21.5054 41.6451 20.5516 42.3484 19.8484C43.0516 19.1451 44.0054 18.75 45 18.75C45.9946 18.75 46.9484 19.1451 47.6516 19.8484C48.3549 20.5516 48.75 21.5054 48.75 22.5Z"
        fill="black"
      />
    </svg>
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[60px] h-[60px] absolute left-[1214px] top-[2798px]"
      preserveAspectRatio="none"
    >
      <g clip-path="url(#clip0_1_35)">
        <path
          d="M58.1939 22.2448L35.8619 16.2568L31.9529 1.67377C31.6259 0.455769 30.3179 -0.252231 29.0339 0.0867692L1.80593 7.38277C0.521932 7.72477 -0.252068 8.99677 0.0749318 10.2148L9.76493 46.3678C10.0919 47.5858 11.3969 48.2968 12.6779 47.9488L23.5169 45.0478L22.0409 50.5618C21.7139 51.7798 22.4879 53.0518 23.7719 53.3908L48.1019 59.9128C49.3859 60.2578 50.6879 59.5498 51.0179 58.3258L59.9279 25.0738C60.2519 23.8558 59.4779 22.5838 58.1939 22.2448ZM4.89893 10.8928L28.3889 4.60477L37.0829 37.0588L13.5929 43.3468L4.89893 10.8928ZM47.0339 55.3888L26.5919 49.7998L28.1999 43.7938L39.9029 40.6528C41.1869 40.3138 41.9669 39.0418 41.6369 37.8238L37.1129 20.9428L54.9539 25.8358L47.0339 55.3888Z"
          fill="black"
        />
      </g>
      <defs>
        <clippath id="clip0_1_35">
          <rect width={60} height={60} fill="white" />
        </clippath>
      </defs>
    </svg>
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[60px] h-[60px] absolute left-[1475px] top-[2798px]"
      preserveAspectRatio="none"
    >
      <path
        d="M47.5 17.5C47.5 17.5 35 35 16.25 35M16.25 35C11.25 35 2.5 37.5 2.5 47.5V57.5H30V47.5C30 41.25 37.5 45 47.5 27.5L43.75 23.75M16.25 35C18.5706 35 20.7962 34.0781 22.4372 32.4372C24.0781 30.7962 25 28.5706 25 26.25C25 23.9294 24.0781 21.7038 22.4372 20.0628C20.7962 18.4219 18.5706 17.5 16.25 17.5C13.9294 17.5 11.7038 18.4219 10.0628 20.0628C8.42187 21.7038 7.5 23.9294 7.5 26.25C7.5 28.5706 8.42187 30.7962 10.0628 32.4372C11.7038 34.0781 13.9294 35 16.25 35ZM7.5 12.5V5H57.5V40H50M27.5 2.5H37.5V7.5H27.5V2.5Z"
        stroke="black"
        stroke-width={2}
      />
    </svg>
  </div>  
  <div className="w-full h-[126px]">
    <p className="absolute left-[1692px] top-[39px] text-[32px] text-left text-black"></p>
  </div>

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