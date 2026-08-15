import React from 'react';
import { Smartphone, Globe, ArrowRight, ExternalLink, Download, CheckCircle2, Zap } from 'lucide-react';
import { TARGET_WEBSITE_URL } from '../data/guides';

interface ActionCardsProps {
  onOpenInstallGuide: () => void;
  detectedOSName: string;
}

export const ActionCards: React.FC<ActionCardsProps> = ({
  onOpenInstallGuide,
  detectedOSName,
}) => {
  const handleOpenWeb = () => {
    window.location.href = TARGET_WEBSITE_URL;
  };

  return (
    <section id="action-choice-cards" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-1">
          접속 방식 선택
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          어떻게 이용하시겠습니까?
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          자주 이용하시는 분께는 [홈 화면 추가], 일회성 확인에는 [웹사이트 바로가기]를 권장합니다.
        </p>
      </div>

      {/* 2-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* [CARD A] - Install App / Add to Home Screen (Recommended) */}
        <div
          id="card-install-app"
          className="relative group bg-white rounded-2xl p-6 border-2 border-emerald-500 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden"
        >
          {/* Top Recommendation Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-emerald-500 text-white text-xs font-bold px-3.5 py-1 rounded-bl-xl shadow-xs flex items-center space-x-1">
            <Zap className="w-3 h-3 fill-amber-300 text-amber-300" />
            <span>추천 · 1초 빠른 접속</span>
          </div>

          <div>
            {/* Icon Header */}
            <div className="w-13 h-13 rounded-2xl bg-emerald-100/90 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-emerald-200">
              <div className="relative">
                <Smartphone className="w-7 h-7 text-emerald-700" />
                <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-0.5">
                  <Download className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                스마트폰 최적화
              </span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                홈 화면에 앱으로 추가하기
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
              따로 앱스토어에서 다운로드할 필요 없이, 스마트폰 바탕화면에 아이콘을 추가하여 
              원터치로 빠르게 접속합니다.
            </p>

            {/* Benefits List */}
            <ul className="mt-4 space-y-2 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
              <li className="flex items-center space-x-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>앱스토어 검색 및 로그인 불필요</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>주소창 없이 넓은 전체화면 실행</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>바탕화면에서 1초 만에 즉시 열기</span>
              </li>
            </ul>
          </div>

          {/* Action CTA Button */}
          <div className="mt-6 pt-2">
            <button
              id="btn-open-install-guide"
              onClick={onOpenInstallGuide}
              className="w-full py-3.5 px-5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>홈 화면 추가 방법 안내</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2 font-medium">
              현재 기기({detectedOSName}) 맞춤 가이드가 제공됩니다
            </p>
          </div>
        </div>

        {/* [CARD B] - Direct Website Access */}
        <div
          id="card-web-direct"
          className="relative group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
        >
          {/* Top Simple Badge */}
          <div className="absolute top-0 right-0 bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-bl-xl border-l border-b border-slate-200">
            설치 없이 즉시 이동
          </div>

          <div>
            {/* Icon Header */}
            <div className="w-13 h-13 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-teal-200">
              <Globe className="w-7 h-7 text-teal-700" />
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                인터넷 브라우저
              </span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                웹사이트 바로 이용하기
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
              설치 과정 없이 지금 바로 최적화된 모바일 웹페이지에서 측량 접수 및 지사 정보를 확인합니다.
            </p>

            {/* Benefits List */}
            <ul className="mt-4 space-y-2 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
              <li className="flex items-center space-x-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>일회성 단순 확인 및 즉시 열람</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>측량 종류별 수수료 및 준비서류 확인</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>순천지사 위치 및 담당자 직통 연결</span>
              </li>
            </ul>
          </div>

          {/* Action CTA Button */}
          <div className="mt-6 pt-2">
            <a
              id="btn-direct-web-link"
              href={TARGET_WEBSITE_URL}
              onClick={handleOpenWeb}
              className="w-full py-3.5 px-5 bg-slate-900 hover:bg-slate-800 active:bg-black text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>웹사이트로 즉시 이동</span>
              <ExternalLink className="w-4 h-4 text-slate-300" />
            </a>
            <p className="text-center text-[11px] text-slate-400 mt-2 font-mono truncate">
              {TARGET_WEBSITE_URL}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
