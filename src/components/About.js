import React from 'react'

function About() {
  return (
    <>
    <div className="max-w-[1520px] mx-auto mt-20  relative" id='0'>      
    <div className='flex justify-between w-full mx-auto' >      
      <p className=" text-5xl font-bold text-left text-black basis-[61%] z-0 px-4 ">
       ABOUT ME
      </p>
      <p className=" basis-[50%] mr-auto text-base font-bold text-left text-black">
      {/* Amor Fati, by embracing it, we navigate the currents of fate with wisdom and resilience. */}
      </p>
    </div>
    <div className='lg:mx-auto'>
    <img src={process.env.PUBLIC_URL + '/images/1about.png'} alt="" className='xl:absolute xl:left-0 xl:m-0 mx-auto top-0 -z-10 px-4'/>
    </div>
    <div className='xl:h-[330px] '>      
    </div>
      
    <div className='flex relative xl:justify-between justify-center mx-auto '>
        <p className=" my-auto text-2xl font-bold text-left text-black xl:basis-[50%] relative pt-5 ">
        </p>
        <div className='  2xl:basis-[45%] xl:basis-[45%] lg:basis-[70%]  md:basis-[90%]  px-4'>        
          <p className="text-xl font-semibold xl:text-left text-black mb-2 mt-2">[Keep Learning]</p>
            <span className="text- text-left text-black">
              AI의 딥러닝에 대응할 수 있는 저의 유일한 방법입니다. 프론트엔드 개발자로서, 실용적인 관점에서 지속적인 학습과 성장을 추구합니다.
              프론트엔드 개발자로서, React와 Next.js와 같은 라이브러리와 프레임워크를 사용하여 웹 애플리케이션을 개발할 수 있는 능력을 가지고 있습니다. 
            </span>
            <br />
            <br />
            <span className=" text-left text-black">
            뿐만아니라 <span className='font-bold'>Firebase, MongoDB, MySQL</span> 등의 데이터베이스를 활용한 기본적인 백엔드 작업에 대한 경험을 쌓았습니다. 데이터의 흐름과 저장, 관리에 대한 이해를 높이고, 프론트엔드와 백엔드 간의 통합에 필요한 기초적인 지식이있습니다. .
            </span>
              <br />
            <span className="text-left text-black"> </span>
              <br />
            <span className="text-left text-black">
            전체적인 웹애플리케이션을 이해하고, 보다 효율적이고 강력한 솔루션을 제공합니다.
            </span>
              <br/>
              <button className=" mr-auto bg-[#111] px-10 py-2.5 mt-7">
                <p className=" text-base font-bold text-right text-white"><a href="http://" target="_blank" rel="noopener noreferrer">자기소개 더보기</a></p>
              </button>  
        </div>
        
      </div>

      </div>







  
    </>
  )
}

export default About