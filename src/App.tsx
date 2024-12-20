import { Calendar, Users, BookOpen, Lock, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { Button } from './components/Button';
import { Card } from './components/Card';

function App() {
  // 노션 폼 URL
  const NOTION_FORM_URL = "https://typhoon-omelet-420.notion.site/8e1a5a0f0939467986c0b686579c5092?pvs=105";

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <header className="relative px-4 pt-16 sm:pt-24 pb-24 sm:pb-40 text-center bg-primary-container">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Calendar className="h-16 w-16 sm:h-20 sm:w-20 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-on-primary-container mb-4 sm:mb-6 tracking-tight">
            인맥 관리의 새로운 패러다임
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            당신의 소중한 인맥을 체계적으로 관리하세요. 
          </p>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            캘린더와 위키가 만나 탄생한 새로운 경험, 
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed px-4 font-bold">
            인캘과 함께하세요.
          </p>
          <Button 
            onClick={() => window.open(NOTION_FORM_URL, '_blank')}
            icon={ArrowRight}
            className="text-base sm:text-lg px-8 py-3"
          >
            사전 등록하기
          </Button>
        </div>
      </header>

      {/* Features */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Calendar,
                title: "스마트 캘린더",
                description: "기존 캘린더와 완벽한 연동. 인맥 관리에 최적화된 새로운 캘린더 경험을 제공합니다.",
                image: "/images/8511943_3942239.jpg"
              },
              {
                icon: Users,
                title: "인맥 위키",
                description: "만남의 순간을 기록하고 관리하세요. AI가 당신의 소중한 관계를 더욱 깊이있게 만들어드립니다.",
                image: "/images/networking-concept-still-life-arrangement-min.jpg"
              },
              {
                icon: Lock,
                title: "프라이버시 중심",
                description: "당신의 소중한 정보를 안전하게 보호합니다. 철저한 보안과 프라이버시 보호를 약속드립니다.",
                image: "/images/11668693_20945274-min.jpg"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-4 sm:p-6 flex flex-col">
                <div className="flex items-center mb-4 sm:mb-6">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="text-lg sm:text-xl font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">
                  {feature.description}
                </p>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-2xl"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="py-20 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mobile Screenshots */}
            <div className="relative flex-1 min-h-[500px] w-full">
              {/* First Phone */}
              <div className="absolute left-1/2 transform 
                              -translate-x-[80%] md:-translate-x-[60%] lg:-translate-x-[80%]
                              w-[200px] sm:w-[240px] lg:w-[280px]
                              rotate-[-8deg] z-10">
                <div className="relative bg-black rounded-[35px] p-2 sm:p-3 shadow-2xl">
                  <div className="relative rounded-[28px] overflow-hidden aspect-[9/19.5]">
                    <img
                      src="/images/mobile-screen.png"
                      alt="Mobile App Screen 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Second Phone */}
              <div className="absolute left-1/2 transform 
                              -translate-x-[20%] md:-translate-x-[40%] lg:-translate-x-[20%]
                              translate-y-8 sm:translate-y-12 lg:translate-y-16
                              w-[200px] sm:w-[240px] lg:w-[280px]
                              rotate-[8deg]">
                <div className="relative bg-black rounded-[35px] p-2 sm:p-3 shadow-2xl">
                  <div className="relative rounded-[28px] overflow-hidden aspect-[9/19.5]">
                    <img
                      src="/images/mobile-screen.png"
                      alt="Mobile App Screen 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 lg:pl-8">
              <h2 className="text-4xl font-bold mb-6">
                언제 어디서나<br />
                손쉽게 관리하세요
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: '직관적인 모바일 경험',
                    description: '최적화된 모바일 인터페이스로 이동 중에도 쉽게 기록하고 관리할 수 있습니다.'
                  },
                  {
                    title: '실시간 알림',
                    description: '중요한 일정과 기념일을 놓치지 않도록 스마트한 알림을 제공합니다.'
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-surface rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mind Map Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
              인맥 위키로 관리하는 인간관계
            </h2>
            <div className="relative">
              {/* Center Circle
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 z-20">
                <div className="w-full h-full rounded-full border-2 border-black bg-white shadow-lg flex items-center justify-center p-3 sm:p-4">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=80"
                    alt="Profile"
                    className="w-24 sm:w-32 h-24 sm:h-32 rounded-full object-cover"
                  />
                </div>
              </div> */}
              
              {/* Connection Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[
                  {
                    title: "직장 동료",
                    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
                    details: "회의 내용, 프로젝트 진행상황, 함께한 점심 약속"
                  },
                  {
                    title: "대학 친구",
                    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
                    details: "동아리 활동, 과제 협업, 추억의 장소들"
                  },
                  {
                    title: "비즈니스 파트너",
                    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
                    details: "미팅 기록, 계약 내용, 함께한 프로젝트"
                  },
                  {
                    title: "멘토",
                    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
                    details: "조언과 인사이트, 정기 미팅 기록"
                  },
                  {
                    title: "동호회 멤버",
                    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
                    details: "취미 활동, 정기 모임, 공통 관심사"
                  },
                  {
                    title: "고객",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
                    details: "미팅 내역, 선호도, 중요 기념일"
                  }
                ].map((item, index) => (
                  <div key={index} className={`
                    ${index < 3 ? 'lg:mt-8' : 'lg:mb-8'}
                    relative
                  `}>
                    <Card className="p-4 hover:scale-105 transition-transform duration-300">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-xl mb-4"
                      />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.details}</p>
                    </Card>
                    <div className="absolute left-1/2 top-1/2 w-16 h-px bg-gray-300 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-16 sm:py-24 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">이런 분들께 추천드려요</h2>
              <img
                src="/images/blue-monday-concept-with-copy-space.jpg"
                alt="Collaboration"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[
                '인맥 관리에 어려움을 느끼시는 분',
                '중요한 약속과 만남을 체계적으로 관리하고 싶으신 분',
                '관계의 히스토리를 쉽게 되돌아보고 싶으신 분',
                '소중한 인연을 더 깊이있게 만들고 싶으신 분'
              ].map((item, index) => (
                <Card key={index} className="flex items-center p-4 space-x-4">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-16 sm:py-24 bg-primary-container">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-on-primary-container">사전 등록</h2>
            <p className="text-base sm:text-lg text-gray-700">
              인캘의 첫 번째 사용자가 되어보세요. 
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              특별한 혜택과 함께 새로운 경험을 선사해드립니다.
            </p>
            <Button 
              onClick={() => window.open(NOTION_FORM_URL, '_blank')}
              icon={ExternalLink}
              fullWidth
              className="text-base sm:text-lg py-3"
            >
              사전 등록하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-surface-container-high">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 인캘 (InCal). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;