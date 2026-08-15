import React from 'react';
import { Phone, Share2, QrCode } from 'lucide-react';
import { SUNCHEON_PHONE } from '../data/guides';

interface HeaderProps {
  onOpenQr: () => void;
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQr, onShare }) => {
  return (
    <header id="main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-3">
          {/* LX Signature Styled Symbol */}
          <div className="flex items-center justify-center h-10 px-2.5 rounded-lg border-2 border-emerald-600 bg-emerald-50/70 text-emerald-800 font-extrabold tracking-wider text-lg shadow-xs select-none">
            <span className="text-emerald-700">L</span>
            <span className="text-emerald-500 font-black">X</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-semibold tracking-tight text-emerald-700 uppercase">
                한국국토정보공사
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold text-slate-800">
                순천지사
              </span>
            </div>
            <span className="text-sm font-bold text-slate-900 leading-tight">
              모바일 진입 허브
            </span>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Quick Phone Call Link */}
          <a
            id="header-phone-btn"
            href={`tel:${SUNCHEON_PHONE}`}
            className="flex items-center space-x-1 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200"
            title="순천지사 전화문의"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">문의</span>
            <span className="font-mono hidden md:inline">{SUNCHEON_PHONE}</span>
          </a>

          {/* QR Code Button */}
          <button
            id="header-qr-btn"
            onClick={onOpenQr}
            className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            title="스마트폰 연결 QR코드"
            aria-label="QR코드 열기"
          >
            <QrCode className="w-4 h-4" />
          </button>

          {/* Share Button */}
          <button
            id="header-share-btn"
            onClick={onShare}
            className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            title="공유하기"
            aria-label="공유하기"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
