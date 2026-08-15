import React, { useState } from 'react';
import {
  X,
  Smartphone,
  Share,
  PlusSquare,
  MoreVertical,
  DownloadCloud,
  CheckCircle2,
  Menu,
  PlusCircle,
  ExternalLink,
  Copy,
  Check,
  Apple,
  Sparkles,
  Info,
} from 'lucide-react';
import { OSType } from '../types';
import { OS_GUIDES, TARGET_WEBSITE_URL } from '../data/guides';

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOS: OSType;
  onCopyUrl: () => void;
  isCopied: boolean;
}

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({
  isOpen,
  onClose,
  initialOS,
  onCopyUrl,
  isCopied,
}) => {
  const [selectedOS, setSelectedOS] = useState<OSType>(initialOS);

  if (!isOpen) return null;

  const currentGuide = OS_GUIDES[selectedOS] || OS_GUIDES.ios;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share':
        return <Share className="w-5 h-5 text-blue-500" />;
      case 'PlusSquare':
        return <PlusSquare className="w-5 h-5 text-emerald-500" />;
      case 'MoreVertical':
        return <MoreVertical className="w-5 h-5 text-amber-500" />;
      case 'DownloadCloud':
        return <DownloadCloud className="w-5 h-5 text-emerald-500" />;
      case 'Menu':
        return <Menu className="w-5 h-5 text-purple-500" />;
      case 'PlusCircle':
        return <PlusCircle className="w-5 h-5 text-emerald-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div
      id="install-guide-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 sm:p-6 relative">
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>원터치 홈 화면 바로가기 가이드</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            스마트폰 홈 화면에 앱 추가하기
          </h3>
          <p className="text-emerald-100/90 text-xs sm:text-sm mt-1">
            기기별 안내에 따라 10초 만에 홈 화면에 등록하세요.
          </p>
        </div>

        {/* Device OS Selector Tabs */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
            기기 환경 선택 (현재 감지: {OS_GUIDES[initialOS]?.name || '자동감지'})
          </div>
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            <button
              id="tab-ios"
              onClick={() => setSelectedOS('ios')}
              className={`flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                selectedOS === 'ios'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Apple className="w-3.5 h-3.5" />
              <span>아이폰(iOS)</span>
            </button>

            <button
              id="tab-android-chrome"
              onClick={() => setSelectedOS('android_chrome')}
              className={`flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                selectedOS === 'android_chrome'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>안드로이드</span>
            </button>

            <button
              id="tab-android-samsung"
              onClick={() => setSelectedOS('android_samsung')}
              className={`flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                selectedOS === 'android_samsung'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>삼성인터넷</span>
            </button>
          </div>
        </div>

        {/* Step-by-Step Instructions Container */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[58vh] overflow-y-auto">
          {/* Active OS Summary Pill */}
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-900 font-medium">
            <div>
              <span className="font-bold text-emerald-800">{currentGuide.name}</span>
              <span className="text-emerald-700 ml-1">({currentGuide.browser})</span>
            </div>
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              3단계 완료
            </span>
          </div>

          {/* Steps List */}
          <div className="space-y-3">
            {currentGuide.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors"
              >
                {/* Step Number Circle */}
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  {step.stepNumber}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h4>
                    <div className="p-1 bg-white rounded-lg border border-slate-200 ml-2">
                      {getStepIcon(step.iconName)}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                  {step.highlightText && (
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      포인트: {step.highlightText}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Helpful Tip */}
          <div className="flex items-start space-x-2.5 p-3.5 bg-amber-50/80 border border-amber-200/70 rounded-xl text-xs text-amber-900 leading-relaxed">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>{currentGuide.tip}</div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
          {/* Copy URL Button */}
          <button
            id="btn-copy-url"
            onClick={onCopyUrl}
            className="flex-1 py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">복사 완료!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>주소 복사하기</span>
              </>
            )}
          </button>

          {/* Go to Website Directly */}
          <a
            id="btn-modal-go-web"
            href={TARGET_WEBSITE_URL}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
          >
            <span>지금 웹사이트로 이동</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
