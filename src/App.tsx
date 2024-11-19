import React, { useState } from 'react';
import { Calendar, Users, BookOpen, Lock, ArrowRight, Check } from 'lucide-react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <header className="relative px-4 pt-24 pb-40 text-center bg-primary-container">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8">
            <Calendar className="h-20 w-20 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-6xl font-bold text-on-primary-container mb-6 tracking-tight">
            인맥 관리의 새로운 패러다임
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            당신의 소중한 인맥을 체계적으로 관리하세요. 캘린더와 위키가 만나 탄생한 새로운 경험, 인캘과 함께하세요.
          </p>
          <Button icon={ArrowRight}>
            베타 신청하기
          </Button>
        </div>
      </header>

      {/* Features */}
      <section className="py-24 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "스마트 캘린더",
                description: "기존 캘린더와 완벽한 연동. 인맥 관리에 최적화된 새로운 캘린더 경험을 제공합니다.",
                image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=2000&q=80"
              },
              {
                icon: Users,
                title: "인맥 위키",
                description: "만남의 순간을 기록하고 관리하세요. AI가 당신의 소중한 관계를 더욱 깊이있게 만들어드립니다.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
              },
              {
                icon: Lock,
                title: "프라이버시 중심",
                description: "당신의 소중한 정보를 안전하게 보호합니다. 철저한 보안과 프라이버시 보호를 약속드립니다.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 flex flex-col">
                <div className="flex items-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">
                  {feature.description}
                </p>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mind Map Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              인맥 위키로 관리하는 인간관계
            </h2>
            <div className="relative">
              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                <div className="w-full h-full rounded-full border-2 border-black bg-white shadow-lg flex items-center justify-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=80"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Connection Lines */}
              <div className="grid grid-cols-3 gap-8 min-h-[600px]">
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
                    ${index < 3 ? 'mt-8' : 'mb-8'}
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
                    <div className="absolute left-1/2 top-1/2 w-16 h-px bg-gray-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">이런 분들께 추천드려요</h2>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2850&q=80"
                alt="Collaboration"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
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
      <section id="waitlist" className="py-24 bg-primary-container">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-4xl font-bold mb-4 text-on-primary-container">베타 테스터 신청</h2>
            <p className="text-gray-700 mb-8">
              인캘의 첫 번째 사용자가 되어보세요. 특별한 혜택과 함께 새로운 경험을 선사해드립니다.
            </p>
            {submitted ? (
              <Card className="bg-surface p-6">
                <p className="text-primary font-medium">신청해주셔서 감사합니다! 곧 연락드리겠습니다.</p>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  required
                />
                <Button type="submit" fullWidth>
                  베타 테스터 신청하기
                </Button>
              </form>
            )}
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