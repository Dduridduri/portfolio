import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { animateScroll as scroll } from 'react-scroll';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';



const work = [
    // {  img:"https://via.placeholder.comm/500",
    //   descTitle:"xxxx 사이트 클론코딩",
    //   desc: "xxx 사이트 클론코딩",
    //   keyword:["#심플", "#깔끔", "#반응형","#광기"],
    //   color:["pink", "orangered", "skyblue"],
    //   font:"Noto Sans KR",
    //   tools: ["Figma", "VS CODE", "GIT"],
    //   date: "5일",
    //   contribution: "100%",
    //   type: "Clone",
    //   original:"https://www.subway.co.kr",
    //   create:"https://www.naver.com",
    //   git: "https://www.github.com",},
  {
    title:"Quick Link",
    desc:"퀵링크 사이트",
    desc2:"웹개발/코딩에 필요한 사이트들을 모아놓은 페이지를 직접 제작하였습니다.",
    tools: ["React", "VS CODE", "GIT"],
    date: "7일",
    img:"/images/1qlink.png",
    img2:"/images/qlink2.png",
    link:"/quicklink",
    git: "https://www.github.com",
  },
  {
    title:"Snake Game",
    desc:"고전 스네이크 게임",
    desc2:"먹이를 먹을때마나 몸이 늘어나는 스네이크게임을 즐겨보세요.",
    tools: ["React", "VS CODE", "GIT"],
    date: "1일",
    img:"/images/1snake.png",
    img2:"/images/playing.png",
    link:"/snakegame",
    git: "https://www.github.com",
  },
  {
    title:"Parcel Tracking",
    desc:"택배 조회 페이지",
    desc2:"Typescript로 제작한 API를 통해 택배운송정보를 알수있는 페이지 입니다. ",
    tools: ["React", "Nextjs", "Typscript", "GIT"],
    date: "1일",
    img:"/images/1parcelbox.png",
    img2:"/images/1parcel2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Quiz",
    desc:"퀴즈 페이지",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["React", "VS CODE", "GIT"],
    date: "2일",
    img:"/images/1quiz.png",
    img2:"/images/1quiz2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Login",
    desc:"로그인 페이지",
    desc2:"파이어 베이스를 이용한 로그인기능을 구현한 페이지입니다.",
    tools: ["React", "FireBase", "MySQL"],
    date: "3일",
    img:"/images/1login.png",
    img2:"/images/1login2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Board",
    desc:"게시판",
    desc2:"파이어 베이스와 CKeditor라이브러리로 구현한 게시판 입니다.",
    tools: ["React", "FireBase", "MySQL", "CKeditor"],
    date: "5일",
    img:"/images/1board.png",
    img2:"/images/1board2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Team Project",
    desc:"팀 프로젝트",
    desc2:"HELLO! Vanilia! 프로젝트 페이지를 방문해보세요!",
    tools: ["React", "FireBase", "GIT", "Figma"],
    date: "30일",
    img:"/images/1team.png",
    img2:"/images/team2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Fortune Teller",
    desc:"운세정보",
    desc2:"과연 나의 오늘 운세는?",
    tools: ["Nextjs", "TypeScript", "GIT"],
    date: "2일",
    img:"/images/1fortune.png",
    img2:"",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Festival INFO",
    desc:"페스티벌 정보",
    desc2:"공공 API를 통해 구현한 페스티벌 정보 페이지 입니다.",
    tools: ["React", "API", "GIT"],
    date: "2일",
    img:"/images/1festival.png",
    img2:"/images/1festival2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Clone Coding",
    desc:"클론코딩",
    desc2:"나이키 사이트 클론코딩페이지입니다. 가장먼저 완성한 프로젝트에요!",
    tools: ["HTML", "CSS", "JS"],
    date: "7일",
    img:"/images/coding.png",
    img2:"/images/clone.png",
    link:"",
    git: "https://www.github.com",
  },
]


function Works() {
  const [select, setSelect] = useState("");
  const [selectImg, setSelectImg]= useState("/images/qlink2.png");
  const [detail, setDetail] = useState("");
  const [desc, setDesc] = useState("");
  const [desc2, setDesc2] = useState("");
  const [tools, setTools] = useState("");
  const [date, setDate] = useState("");
  const [explain, setExplain] = useState(false);
  const scrollContainerRef = useRef(null);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  

  
  return (
    <>
        <div id='2' className='w-[400px] lg:mx-auto md:overflow-hidden mt-10 relative sm:max-w-4xl sm:mt-5 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-full' >
          <div className='w-full border h-[600px] bg-[#2e2e2e] relative'>            
            <button className='absolute text-black bottom-2 right-7 bg-slate-100  px-4 py-1 z-50'><Link to={detail}>방문하기</Link></button>
            <button className='absolute text-black bottom-12 right-7 bg-slate-100  px-4 py-1 text-center z-50' onMouseOver={()=>{setExplain(true);scrollToTop();}} onMouseLeave={()=>{setExplain(false)}}>설명보기</button>            
            <div ref={scrollContainerRef} className='w-[80%] h-full border-r-2 border-l-2 mx-auto bg-white overflow-auto scrollbar-hide relative'>
              {explain === true &&
                <div className='w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center '>
                  <h3 className='text-2xl sm:text-4xl font-bold text-center '>{desc}</h3>
                  <h4 className='text-xl sm:text-2xl text-center mt-10'>{desc2}</h4>
                  <p className='sm:text-xl py-2'>사용 기술: {tools[0]} {tools[1]} {tools[2]}</p>
                  <p className='sm:text-xl py-2'>개발기간: {date}</p>
                  <p></p>
                </div>
              }
               <img src={process.env.PUBLIC_URL + `${selectImg}`} alt={select} className={`w-full h-auto ${!explain ? "" : "opacity-20"}`}/>   
              {/* <img src={process.env.PUBLIC_URL + `${selectImg}`} alt={select} className='w-full h-auto'/> */}
            </div>
            
          </div>        

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={2}
            breakpoints={{
              640: {slidesPerView: 2,},
              768: {slidesPerView: 2,},              
              1400: {slidesPerView: 4,},
              1500: {slidesPerView: 5,},
            }}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            loop={true}
            autoplay={{delay: 2500, disableOnInteraction: true}}
            onSwiper={(swiper) => {
              swiper.el.onmouseover = () => {
                swiper.autoplay.stop();
              };
              swiper.el.onmouseout = () => {
                swiper.autoplay.start();
              };
            }}
            className='mx-auto'>
            {work.map((e,i) => (             
              <SwiperSlide key={i} >
                <div 
                onMouseOver={()=>{
                  scrollToTop();
                  setSelect(i);
                  setSelectImg(e.img2);
                  setDetail(e.link);
                  setDesc(e.desc)
                  setDesc2(e.desc2)
                  setTools(e.tools)
                  setDate(e.date) 
                }}onClick={()=>{
                  scrollToTop();
                  setSelect(i);
                  setSelectImg(e.img2);
                  setDetail(e.link); 
                  setDesc(e.desc)
                  setDesc2(e.desc2)
                  setTools(e.tools)
                  setDate(e.date)              
                }}className='h-52 border-box relative lg:w-full w-4/5'>
                  <img src={process.env.PUBLIC_URL + `${e.img}`} alt={e.title} className='w-full h-full object-cover hover:opacity-40'onMouseLeave={()=>{setSelect("")}}/>
                  </div>
                  <p className='text-3xl font-bold leading-normal' >{select === i ? e.title : ""}<br/></p>                  
              </SwiperSlide>
               
            ))}
          </Swiper>
          <div className="custom-swiper-button-next swiper-button-next absolute bottom-0 right-0 z-10 p-2 rounded-full shadow-md bg-gray-200 hover:bg-gray-400 after:hidden">
            <span className="swiper-optional text-black"><FontAwesomeIcon icon={faAngleRight}/></span>
          </div>
          <div className="custom-swiper-button-prev swiper-button-prev absolute bottom-0 left-0 z-10 p-2 rounded-full shadow-md bg-gray-200 hover:bg-gray-400 after:hidden">
            <span className="swiper-optional text-black"><FontAwesomeIcon icon={faAngleLeft}/></span>
          </div>          
        </div>  
      </>     
  )
}

export default Works