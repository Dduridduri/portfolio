import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Works() {

  
  return (
    <>
        <div className='max-w-[1520px] mx-auto overflow-hidden'>
          <div>
            <img src="https://via.placeholder.com/1520x600" alt="" />
          </div>        

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={6}
            navigation = {true}
            loop={true}
            autoplay={{delay: 2500, disableOnInteraction: true}}
            className='mx-auto'>
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i} >
                <div className='border xl:h-52 md:h-36 h-20'>{i}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>  
      </>     
  )
}

export default Works