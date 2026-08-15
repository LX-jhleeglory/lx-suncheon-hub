import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { SUNCHEON_PHONE, SUNCHEON_ADDRESS } from '../data/guides';

export const BranchInfo: React.FC = () => {
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(SUNCHEON_ADDRESS)}`;
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(SUNCHEON_ADDRESS)}`;

  return (
    <section id="branch-info-section" className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-5 sm:p-7 shadow-lg relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Column: Branch Title & Contacts */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>지사 운영 정보</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              한국국토정보공사 순천지사
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              정확하고 신뢰받는 지적측량 서비스로 순천시민의 소중한 재산권을 안전하게 지킵니다.
            </p>

            <div className="pt-1 space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{SUNCHEON_ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>운영시간: 평일 09:00 ~ 18:00 (주말 및 공휴일 휴무)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>대표 문의: <strong className="text-white font-mono text-sm">{SUNCHEON_PHONE}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Call & Map Direct Actions */}
          <div className="space-y-3 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              원터치 고객 지원
            </h4>

            {/* Direct Call Button */}
            <a
              id="btn-branch-phone-call"
              href={`tel:${SUNCHEON_PHONE}`}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>순천지사 전화 상담 연결 ({SUNCHEON_PHONE})</span>
            </a>

            {/* Map Links */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                id="link-kakao-map"
                href={kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>카카오맵 길찾기</span>
              </a>

              <a
                id="link-naver-map"
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>네이버지도 길찾기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
