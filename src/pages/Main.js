import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header =["About", "Works", "Skills", "Contact"]

function Main() {
  return (
    <div className="w-[1920px] h-[7184px] relative overflow-hidden bg-white">
    <div className='border-b-2 border-black '>
      <ul className='flex justify-center py-10 relative '>
        <li className='absolute left-10 top-[32px] after:absolute after:w-[2px] after:h-[120px] after:bg-black after:-right-[45px] after:-top-10'>
        <p className="font-bold">
          <span className="text-[32px] font-bold text-left text-white text-transparent-fill text-stroke">K.</span>
          <span className="text-[32px] font-bold text-left text-[#111]">Woon</span>
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
    <div className='w-[1520px] h-[820px] mx-auto my-[] '>      
      <div className='ml-10'>
        <p className="text-[150px] font-bold text-left text-[#111]">
          Front-End
        </p>
        <p className=" text-[150px] font-bold text-left text-black leading-4 ml-20">
          Developer
          </p>
        <p className="absolute text-[150px] font-bold text-left text-transparent-fill text-stroke">
          KI Woon
        </p>
      </div>
      <img src={process.env.PUBLIC_URL + '/images/Rectangle 3.png'}
        className="mt-[8%]" />
    </div>

    
  {/* <img
    src={process.env.PUBLIC_URL + '/images/Rectangle 4.png'}
    className="w-[1520px] h-[820px] absolute left-[205px] top-[2087px] opacity-50 object-none"
  /> */}


  <p className="absolute left-[276px] top-[1446px] text-5xl font-bold text-left text-black">
    ABOUT ME
  </p>
  <p className="w-[551px] absolute left-[1110px] top-[1750px] text-2xl font-bold text-left text-black">
    <span className="w-[551px] text-2xl font-bold text-left text-black">
      Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
    </span>
    <br />
    <span className="w-[551px] text-2xl font-bold text-left text-black">
      {" "}
      Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un
    </span>
    <br />
    <br />
    <span className="w-[551px] text-2xl font-bold text-left text-black"> </span>
    <br />
    <span className="w-[551px] text-2xl font-bold text-left text-black">
      anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo
      campione.
    </span>
  </p>
  <p className="w-[244px] absolute left-[1110px] top-[1450px] text-base font-bold text-left text-black">
    anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.
  </p>
  <p className="absolute left-[290px] top-[1865px] text-2xl font-bold text-left text-black">
    Follow me
  </p>
  <svg
    width={150}
    height={1}
    viewBox="0 0 150 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[443px] top-[1879px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line y1="0.5" x2={150} y2="0.5" stroke="black" />
  </svg>
  <p className="absolute left-[630px] top-[1861px] text-[32px] text-left text-black"></p>
  <div className="flex justify-center items-center absolute left-[290px] top-[1943px] overflow-hidden gap-2.5 px-[42px] py-2.5 bg-[#111]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">Contact me</p>
  </div>
  <svg
    width={905}
    height={820}
    viewBox="0 0 905 820"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[205px] top-[2087px] opacity-80"
    preserveAspectRatio="none"
  >
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
  <div className="w-[1920px] h-[126px]">


    <p className="absolute left-[1692px] top-[39px] text-[32px] text-left text-black"></p>
  </div>
  <div className="w-[1520px] h-[1659px]">
    <p className="absolute left-[226px] top-[3778px] text-4xl font-bold text-left text-black">
      Page 01
    </p>
    <p className="absolute left-[226px] top-[4314px] text-4xl font-bold text-left text-black">
      Page 02
    </p>
    <p className="absolute left-[1270px] top-[4314px] text-4xl font-bold text-left text-black">
      Page 03
    </p>
    <p className="absolute left-[226px] top-[4852px] text-4xl font-bold text-left text-black">
      Page 04
    </p>
    <p className="absolute left-[789px] top-[4852px] text-4xl font-bold text-left text-black">
      Page 05
    </p>
    <p className="absolute left-[276px] top-[3236px] text-5xl font-bold text-left text-black">
      My Works
    </p>
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 6.png'}
      className="w-[476px] h-[410px] absolute left-[1249.5px] top-[3893.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 47.png'}
      className="w-[476px] h-[410px] absolute left-[205.5px] top-[4431.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 10.png'}
      className="w-[957px] h-[410px] absolute left-[205.5px] top-[3893.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 46.png'}
      className="w-[957px] h-[410px] absolute left-[768.5px] top-[4429.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 46.png'}
      className="w-[1512px] h-[410px] absolute left-[205.5px] top-[3357.5px] object-cover border border-black"
    />
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
 
    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
     
    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
    
    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
    
    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
    
    </svg>
  </div>
  <div className="w-[1520px] h-[1537px]">
    <p className="absolute left-[226px] top-[5399px] text-4xl font-bold text-left text-black">
      Page 01<button className='py-1 px-7 rounded-full border-[1px] border-[#111111] mx-2'><FontAwesomeIcon icon={faArrowRight}/></button>
    </p>
    <p className="absolute left-[226px] top-[5935px] text-4xl font-bold text-left text-black">
      Page 02
    </p>
    <p className="absolute left-[1270px] top-[5935px] text-4xl font-bold text-left text-black">
      Page 03
    </p>
    <p className="absolute left-[226px] top-[6473px] text-4xl font-bold text-left text-black">
      Page 04
    </p>
    <p className="absolute left-[789px] top-[6473px] text-4xl font-bold text-left text-black">
      Page 05{" "}
    </p>
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 6.png'}
      className="w-[476px] h-[410px] absolute left-[1249.5px] top-[5514.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 47.png'}
      className="w-[476px] h-[410px] absolute left-[205.5px] top-[6052.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 10.png'}
      className="w-[957px] h-[410px] absolute left-[205.5px] top-[5514.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 46.png'}
      className="w-[957px] h-[410px] absolute left-[768.5px] top-[6050.5px] object-cover border border-black"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/Rectangle 46.png'}
      className="w-[1512px] h-[410px] absolute left-[205.5px] top-[4978.5px] object-cover border border-black"
    />
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
    
    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
 
    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >
 
    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >

    </svg>
    <svg
      width={66}
      height={43}
      viewBox="0 0 66 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[66px] h-[43px]"
      preserveAspectRatio="none"
    >

    </svg>
  </div>
  <div className="w-[1380px] h-[104px]">
    <div className="w-[1380px] h-[104px] absolute left-[275.5px] top-[6599.5px] rounded-[50px] bg-[#111]" />
    <p className="absolute left-[844px] top-[6630px] text-4xl font-bold text-left text-white">
      + More Works
    </p>
  </div>
  <div className="w-[1920px] h-[234px]">
    <div className="w-[1920px] h-[234px] absolute left-[-0.5px] top-[6949.5px] bg-[#111]" />
    <p className="absolute left-[1220px] top-[6997px] text-2xl font-bold text-left text-white">
      Instagram
    </p>
    <p className="absolute left-[1440px] top-[6997px] text-2xl font-bold text-left text-white">
      KakaoTalk
    </p>
    <p className="absolute left-[1662px] top-[6997px] text-2xl font-bold text-left text-white">
      Email
    </p>
    <p className="absolute left-[206px] top-[6997px] text-2xl font-bold text-left text-white">
      CONTACT
    </p>
    <p className="absolute left-[876px] top-[7125px] text-xl font-bold text-left">
      <span className="text-xl font-bold text-left text-[#8e8e8e]">Made by</span>
      <span className="text-xl font-bold text-left text-white"> Ki woon</span>
    </p>
    <p className="absolute left-[893px] top-[7149px] text-xl font-bold text-left text-[#8e8e8e]">
      ⓒ kiwoon.net
    </p>
  </div>
</div>
  )
}

export default Main