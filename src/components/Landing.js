import { motion, AnimatePresence  } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Landing() {
  const [zindex, setzIndex] = useState(50);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
     
      setzIndex(-10)
    }, 1000);     // 5초 후 메인 페이지로 이동
     

    return () => clearTimeout(timer);
  }, [navigate]);

    // const springAnimation = {
    //   initial: { y: -1000, opacity: 0 }, // 초기 위치를 화면 위쪽 바깥으로 설정
    //   animate: {
    //     y: -404, // 최종 위치의 y 좌표
    //     x: -855, // 최종 위치의 x 좌표
    //     opacity: 1, // 최종 투명도
    //     transition: {
    //       type: 'spring', // 스프링 애니메이션 타입 사용
    //       stiffness: 100, // 강성 설정
    //       damping: 10, // 감쇠 설정
    //       mass: 1, // 질량 설정 (선택적)
    //       when: "beforeChildren", // 자식 컴포넌트 애니메이션 전에 실행
    //     },
    //   },
    // };


  return (
    <>
    <AnimatePresence>
    <motion.div 
      initial={{ opacity: 1 , }}
      animate={{ opacity: 0 , x: -0, y: -0}}
      transition={{ delay: 0.5, duration: 2}} 
      className={`fixed z-50 w-full opacity-100 transition-all duration-200 `} style={{zIndex: zindex}}>
      <header className="App-header">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: -100 }}
          transition={{ type: "spring", stiffness: 220 }}
        >
        <img src={process.env.PUBLIC_URL + '/images/bonobono.png'} alt="bonobono" />

        </motion.h1>
        <motion.p
          initial= {{ opacity: 1 , x: -0, y: -0}}         
          animate= {{ opacity: 1 , x: -0, y: 0}}
          transition={{ delay: 0, duration: 2, type: "spring", stiffness: 220  }}
          className='text-[200px] font-bold'>
           
        </motion.p>
      </header>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Landing