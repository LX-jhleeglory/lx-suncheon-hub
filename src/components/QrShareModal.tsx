import React from 'react';
import { X, Copy, Check, QrCode, ExternalLink, Share2, Smartphone } from 'lucide-react';
import { TARGET_WEBSITE_URL } from '../data/guides';

interface QrShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyUrl: () => void;
  isCopied: boolean;
}

export const QrShareModal: React.FC<QrShareModalProps> = ({
  isOpen,
  onClose,
  onCopyUrl,
  isCopied,
}) => {
  if (!isOpen) return null;

  // We generate a high-contrast clean SVG QR code visualization pointing to the URL
  // We can use a reliable public QR code generator API or direct SVG
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    TARGET_WEBSITE_URL
  )}&bgcolor=ffffff&color=065f46&margin=1`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'LX 한국국토정보공사 순천지사',
          text: 'LX 순천지사 모바일 서비스 바로가기',
          url: TARGET_WEBSITE_URL,
        });
      } catch {
        onCopyUrl();
      }
    } else {
      onCopyUrl();
    }
  };

  return (
    <div
      id="qr-share-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-center p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-qr-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="닫기"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header */}
        <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 border border-emerald-200">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-slate-900">
          스마트폰으로 바로 스캔하기
        </h3>
        <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
          스마트폰 기본 카메라로 아래 QR 코드를 비추면 순천지사 모바일 서비스로 즉시 이동합니다.
        </p>

        {/* QR Code Container */}
        <div className="my-5 p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-emerald-300 inline-block shadow-inner">
          <img
            src={qrApiUrl}
            alt="LX 순천지사 모바일 QR코드"
            className="w-48 h-48 mx-auto rounded-lg object-contain"
            loading="eager"
          />
          <div className="mt-2 flex items-center justify-center space-x-1 text-[11px] font-bold text-emerald-800">
            <Smartphone className="w-3 h-3 text-emerald-600" />
            <span>LX 순천지사 공식 서비스</span>
          </div>
        </div>

        {/* URL Box */}
        <div className="bg-slate-100 p-2.5 rounded-xl text-xs font-mono text-slate-600 truncate mb-4 border border-slate-200">
          {TARGET_WEBSITE_URL}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <button
              id="btn-qr-copy-url"
              onClick={onCopyUrl}
              className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">복사됨</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>주소 복사</span>
                </>
              )}
            </button>

            <button
              id="btn-qr-native-share"
              onClick={handleShare}
              className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>공유하기</span>
            </button>
          </div>

          <a
            id="btn-qr-open-direct"
            href={TARGET_WEBSITE_URL}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
          >
            <span>지금 웹사이트 열기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
