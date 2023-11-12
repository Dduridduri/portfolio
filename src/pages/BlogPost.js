import React, { useState } from 'react';


function BlogPosts() {

  const skills = [
    {
      logo: '/images/Image 1.png',
      title: 'HTML',
      description: 'Structure web content with semantic markup.',
      desc2:"웹 개발의 기초를 단단히 다지며, HTML을 통해 클라이언트의 요구사항과 프로젝트 목표를 충실히 반영한 웹사이트를 구축합니다. 접근성과 웹 표준을 항상 염두에 두고, 유지보수가 용이하고 확장 가능한 마크업 구조를 제공합니다."
    },
    {
      logo: '',
      title: '',
      description: '',
      desc2:""
    },
    {
      logo: '/images/Image 3.png',
      title: 'CSS',
      description: 'Style web pages using cascading style sheets.',
      desc2:"CSS와 함께 Tailwind CSS 및 Styled Components의 사용 경험을 바탕으로, 효과적인 반응형 디자인과 컴포넌트 기반의 스타일링을 제공합니다. 프로젝트의 요구사항을 충족하고 최신 웹 표준 및 접근성 가이드라인을 준수하는 구조적이고 체계적인 코드를 작성합니다."
      
    },
    {
      logo: '/images/Image 4.png',
      title: 'JavaScript',
      description: 'Style web pages using cascading style sheets.',
      desc2:"JavaScript를 활용하여 동적이고 상호 작용이 풍부한 웹 페이지를 구현합니다. 최신 ES6+ 문법에 능숙하며, 비동기 처리, API 통신, 그리고 프론트엔드 프레임워크를 이용한 복잡한 사용자 인터페이스 구성에 경험이 있습니다. 코드의 모듈성과 테스트 용이성을 강화하여, 확장 가능하고 유지보수가 편리한 애플리케이션을 개발합니다."
    },
    {
      logo: '/images/Image 5.png',
      title: 'TypeScript',
      description: 'Create interactive web experiences.',
      desc2:"TypeScript를 통해 안정성과 확장성을 갖춘 애플리케이션 개발에 참여합니다. 강력한 타입 시스템을 활용하여 오류를 최소화하고, 코드의 가독성과 유지보수를 개선합니다. 다양한 프론트엔드 및 백엔드 프레임워크와의 통합 경험을 보유하고 있으며, 대규모 프로젝트에서 협업을 위한 강력한 타입 체크와 인터페이스 정의의 중요성을 이해합니다."
    },
    {
      logo: '/images/Image 6.png',
      title: 'React',
      description: 'Create interactive web experiences.',
      desc2:"React를 사용하여 성능이 우수하고 사용자 경험이 중심인 싱글 페이지 애플리케이션(SPA)을 구축합니다. 컴포넌트 기반 아키텍처를 통해 재사용 가능하고 유지보수가 편리한 UI를 개발하며, 상태 관리 라이브러리와 효과적으로 통합하여 데이터 흐름을 관리합니다. 또한, React Hooks, Context API 등 최신 React 기능을 활용하여 더 깔끔하고 효율적인 코드를 작성하고, 크로스 브라우징 호환성 및 웹 접근성 표준을 준수합니다."
    },
    {
      logo: '/images/Image 7.png',
      title: 'Node.js',
      description: 'Create interactive web experiences.',
      desc2:"Node.js를 활용하여 효율적인 서버 사이드 애플리케이션을 구축합니다. 비동기 이벤트 주도 아키텍처를 활용하여 고성능 네트워크 애플리케이션을 개발하며, Express.js와 같은 프레임워크를 통해 RESTful API를 설계합니다. 모듈화와 코드 재사용을 강조하며, 대용량 트래픽 처리를 위한 성능 최적화와 보안성 강화에 주력합니다. NPM을 통한 패키지 관리와 함께 단위 테스트 및 통합 테스트를 수행하여 안정성을 보장합니다."
    },
    {
      logo: '/images/Image 8.png',
      title: 'Next.js',
      description: 'Create interactive web experiences.',
      desc2:"Next.js를 활용하여 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하는 최적화된 웹 애플리케이션을 구축합니다. 이를 통해 SEO 성능을 향상시키고, 페이지 로딩 시간을 단축시켜 사용자 경험을 개선합니다. 라우팅 시스템을 내장하여 프로젝트의 구조를 간소화하고, API 라우트를 사용하여 서버리스 함수를 쉽게 구현할 수 있습니다. 개발부터 배포까지의 워크플로우를 간편화하며, Vercel과 같은 플랫폼과의 긴밀한 통합을 통해 지속적인 통합(CI) 및 배포(CD)를 자동화합니다."
    },
    {
      logo: '/images/Image 9.png',
      title: 'GitHub',
      description: 'Create interactive web experiences.',
      desc2:"GitHub를 통해 코드 버전 관리와 협업을 수행합니다. 소스 코드의 분산 버전 제어를 위한 Git의 기능을 활용하며, 프로젝트의 변화를 추적하고 여러 개발자 간의 코드 통합을 용이하게 합니다. Pull Request와 Code Review 과정을 통해 코드 품질을 개선하고, Issues와 Projects 기능으로 효과적인 작업 관리와 팀 커뮤니케이션을 지원합니다. 또한, GitHub Actions를 사용하여 지속적인 통합(CI) 및 지속적인 배포(CD) 파이프라인을 구축하여 코드의 통합과 배포를 자동화합니다."
    },
  ];


    const [activeContent, setActiveContent] = useState('Structure web content with semantic markup.');
    const [logoImage, setLogoImage] = useState('/images/Image 1.png')
    const [title, setTitle] = useState('HTML')
    const [imageSizeClass, setImageSizeClass] = useState('w-20');
    const [desc2, setDesc2] = useState("웹 개발의 기초를 단단히 다지며, HTML을 통해 클라이언트의 요구사항과 프로젝트 목표를 충실히 반영한 웹사이트를 구축합니다. 접근성과 웹 표준을 항상 염두에 두고, 유지보수가 용이하고 확장 가능한 마크업 구조를 제공합니다.")

    const changeImageSize = (size) => {
      setImageSizeClass(size);
    };

    const clickEvent = (e,el) =>{
      if(e !== 1){
        setActiveContent(el.description);
        setLogoImage(el.logo);
        setTitle(el.title);
        changeImageSize('w-20');
        setDesc2(el.desc2);
      }else{
        return false;
      }
    }
 


  return (
    <>
      <div className='mx-auto z-10 max-w-[1520px] my-20'>
      <h3 className='text-5xl font-bold mb-10'>Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 sm:gap-x-5 lg:gap-x-10 gap-y-4  ">
          {skills.map((e, i) => (
            <div key={i} onClick={()=>clickEvent(i,e)}
                // <div key={i} onClick={()=> {
                //   i !== 1 &&
                //   setActiveContent(e.description);
                //   setLogoImage(e.logo);
                //   setTitle(e.title);
                //   changeImageSize('w-20');
                //   setDesc2(e.desc2)
                // }
                //   }
              className={`p-4 border border-gray-300 rounded-lg shadow-md text-center transition-transform transform  ${i === 1 ? 'row-span-4 disable-click' : 'hover:scale-x-105 hover:scale-y-105 cursor-pointer'}  `}>            
              <img src={process.env.PUBLIC_URL + `${i === 1 ? logoImage : e.logo }`} alt={`${e.title} logo`} className={`mx-auto mb-4 ${i === 1 ? imageSizeClass : 'w-10'}`} />
              <h3 className="text-lg font-semibold mb-2">{i === 1 ? title : e.title}</h3>
              <h4 className={`text-gray-600 text-2xl font-semibold ${i === 1 ? 'py-5' : ''}`}>{i === 1 && activeContent }</h4>
              <p className={`text-gray-600 text-sm ${i === 1 ? 'py-5' : ''}`}>{i === 1 && desc2 }</p>
            </div>
          ))}
          </div>
        </div>
    </>   
  )
}

export default BlogPosts;