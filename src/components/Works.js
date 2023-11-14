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
    img:"/images/Qlink.png",
    img2:"/images/Qlink2.png",
    link:"/quicklink",
    git: "https://www.github.com",
  },
  {
    title:"Snake Game",
    desc:"고전 스네이크 게임",
    desc2:"먹이를 먹을때마나 몸이 늘어나는 스네이크게임을 즐겨보세요.",
    tools: ["React", "VS CODE", "GIT"],
    date: "1일",
    img:"/images/snake.png",
    img2:"/images/playing.png",
    link:"/snake",
    git: "https://www.github.com",
  },
  {
    title:"Parcel Tracking",
    desc:"택배 조회 페이지",
    desc2:"Typescript로 제작한 API를 통해 택배운송정보를 알수있는 페이지 입니다. ",
    tools: ["React", "Nextjs", "Typscript", "GIT"],
    date: "1일",
    img:"/images/parcelbox.png",
    img2:"/images/parcel2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Quiz",
    desc:"퀴즈 페이지",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["React", "VS CODE", "GIT"],
    date: "2일",
    img:"/images/quiz.png",
    img2:"/images/quiz2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Login",
    desc:"로그인 페이지",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["React", "FireBase", "MySQL"],
    date: "3일",
    img:"/images/login.png",
    img2:"/images/login2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Board",
    desc:"",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["React", "FireBase", "MySQL", "CKeditor"],
    date: "5일",
    img:"/images/board.png",
    img2:"/images/board2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Team Project",
    desc:"",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["React", "FireBase", "GIT", "Figma"],
    date: "20일",
    img:"/images/team.png",
    img2:"/images/team2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Fortune Teller",
    desc:"",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["Nextjs", "TypeScript", "GIT"],
    date: "2일",
    img:"/images/fortune.png",
    img2:"",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Festival INFO",
    desc:"",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["React", "API", "GIT"],
    date: "2일",
    img:"/images/Festival.png",
    img2:"/images/festival2.png",
    link:"",
    git: "https://www.github.com",
  },
  {
    title:"Clone Coding",
    desc:"",
    desc2:"개발도구들의 간단한 이론적인 퀴즈를 풀어보세요!",
    tools: ["HTML", "CSS", "JS"],
    date: "2일",
    img:"/images/coding.png",
    img2:"",
    link:"",
    git: "https://www.github.com",
  },
]


function Works() {
  const [select, setSelect] = useState("");
  const [selectImg, setSelectImg]= useState("");

  // const scrollContainerRef = useRef(null);
  // let scrollAnimation;

  // // 스크롤 애니메이션을 시작하는 함수
  // const startScrollAnimation = () => {
  //   // 이전 애니메이션을 중단
  //   if (scrollAnimation) {
  //     clearInterval(scrollAnimation);
  //   }

  //   // 새 스크롤 애니메이션 시작
  //   scrollAnimation = setInterval(() => {
  //     if (scrollContainerRef.current) {
  //       const container = scrollContainerRef.current;

  //       container.scrollTop += 1;
  //       // 스크롤이 끝에 도달하지 않았다면 계속 스크롤
  //       if (container.scrollTop < container.scrollHeight - container.clientHeight) {
  //         container.scrollTop += 1;
  //          // 1픽셀씩 스크롤
  //       } else {
  //         // 끝에 도달했다면 애니메이션 중단
  //         clearInterval(scrollAnimation);
  //       }
  //     }
  //   }, 100); // 10ms 간격으로 스크롤
  // };

  // // 마우스 오버 이벤트 핸들러
  // const handleMouseOver = () => {
  //   startScrollAnimation();
  // };
  // // const Reset = () => {
  // //   if (scrollAnimation) clearInterval(scrollAnimation);
  // //   if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0; // 스크롤 위치를 최상단으로 리셋
  // // };

  // const handleMouseLeave = () => {
  //   clearInterval(scrollAnimation); // 스크롤 애니메이션 중지
  // };


  // useEffect(() => {
  //   // 컴포넌트 언마운트시 인터벌 클리어
  //   return () => {
  //     if (scrollAnimation) {
  //       clearInterval(scrollAnimation);
  //     }
  //   };
  // }, []);
  return (
    <>
        <div className='max-w-[540px] lg:mx-auto mx-10 md: overflow-hidden mt-10 relative sm:max-w-full sm:mt-5 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-full' >
          <div className='w-full border h-[600px] bg-[#2e2e2e]'>
            <div className='w-[80%] h-full border-r-2 border-l-2 mx-auto bg-white overflow-auto scrollbar-hide'>
              <img src={process.env.PUBLIC_URL + `${selectImg}`} alt={select} className='w-full h-auto'/>
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
                  setSelect(i);
                  setSelectImg(e.img2);               
                }}onClick={()=>{
                  setSelect(i);
                  setSelectImg(e.img2);               
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