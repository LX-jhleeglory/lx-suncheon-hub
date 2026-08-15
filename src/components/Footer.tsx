import React from 'react';
import { Phone, Shield } from 'lucide-react';
import { SUNCHEON_PHONE } from '../data/guides';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 border-t border-slate-800 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-3">
        {/* Brand Sign */}
        <div className="flex items-center space-x-2 text-slate-300 text-xs font-semibold">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>LX 한국국토정보공사 순천지사</span>
        </div>

        {/* Official Requirement Line */}
        <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
          © LX 한국국토정보공사 순천지사 &nbsp;|&nbsp; 대표 문의:{' '}
          <a
            id="footer-phone-link"
            href={`tel:${SUNCHEON_PHONE}`}
            className="text-emerald-400 hover:text-emerald-300 font-mono font-bold underline underline-offset-2 inline-flex items-center space-x-1"
          >
            <Phone className="w-3.5 h-3.5 inline mr-0.5" />
            <span>{SUNCHEON_PHONE}</span>
          </a>
        </p>

        {/* Small Notice */}
        <p className="text-[11px] text-slate-500 max-w-md">
          본 페이지는 순천시민 및 고객 여러분의 빠른 접근을 돕기 위한 공식 모바일 진입 허브(Landing Hub)입니다.
        </p>
      </div>
    </footer>
  );
};
