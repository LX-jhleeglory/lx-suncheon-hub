import React from 'react';
import { Sparkles, ShieldCheck, MapPin, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-900 to-slate-950 text-white pt-9 pb-12 px-4 sm:px-6 rounded-b-3xl sm:rounded-3xl sm:mt-4 max-w-4xl mx-auto shadow-xl"
    >
      {/* Decorative Geospatial Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Decorative Glow elements */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        {/* Top Official Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-700/60 border border-emerald-400/30 text-emerald-200 text-xs font-semibold backdrop-blur-md shadow-inner">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
          <span>LX 한국국토정보공사 순천지사 공식 허브</span>
        </div>

        {/* Main Headline H1 */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
          LX 순천지사 모바일 서비스에 <br className="hidden sm:inline" />
          오신 것을 환영합니다
        </h1>

        {/* Subtext P */}
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
          원하시는 이용 방식을 선택해 주세요. 스마트폰 앱처럼 홈 화면에 추가하여
          언제든 간편하게 접속하거나, 웹사이트에서 바로 이용하실 수 있습니다.
        </p>

        {/* Quick Highlights */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-2 text-xs text-emerald-100/90">
          <span className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
            <Compass className="w-3.5 h-3.5 text-emerald-300" />
            <span>지적측량 접수 및 조회</span>
          </span>
          <span className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            <span>순천시 전 지역 측량 지원</span>
          </span>
          <span className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>무설치 원터치 홈 화면 지원</span>
          </span>
        </div>
      </div>
    </section>
  );
};
