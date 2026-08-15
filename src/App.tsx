import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ActionCards } from './components/ActionCards';
import { InstallGuideModal } from './components/InstallGuideModal';
import { QrShareModal } from './components/QrShareModal';
import { ServicesOverview } from './components/ServicesOverview';
import { BranchInfo } from './components/BranchInfo';
import { Footer } from './components/Footer';
import { detectUserOS } from './utils/detectOS';
import { OSType } from './types';
import { TARGET_WEBSITE_URL } from './data/guides';
import { Check, Copy } from 'lucide-react';

export default function App() {
  const [detectedOS, setDetectedOS] = useState<OSType>('android_chrome');
  const [browserInfo, setBrowserInfo] = useState<string>('Android Chrome');
  const [isInstallGuideOpen, setIsInstallGuideOpen] = useState<boolean>(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    const { os, browserName } = detectUserOS();
    setDetectedOS(os);
    setBrowserInfo(browserName);
  }, []);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(TARGET_WEBSITE_URL);
      setIsCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch {
      // Fallback
      setIsCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setIsCopied(false);
        setShowToast(false);
      }, 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'LX 한국국토정보공사 순천지사 모바일 허브',
          text: 'LX 순천지사 모바일 서비스 - 홈 화면 추가 및 웹 바로가기',
          url: window.location.href || TARGET_WEBSITE_URL,
        });
      } catch {
        // User cancelled or share failed, fallback to copy
        handleCopyUrl();
      }
    } else {
      setIsQrModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-900 font-sans">
      {/* Toast Notification */}
      {showToast && (
        <div
          id="toast-notification"
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center space-x-2 text-xs font-semibold animate-bounce"
        >
          <Check className="w-4 h-4 text-emerald-400" />
          <span>순천지사 웹사이트 주소가 복사되었습니다!</span>
        </div>
      )}

      {/* 1. Header (상단 브랜드 영역) */}
      <Header
        onOpenQr={() => setIsQrModalOpen(true)}
        onShare={handleNativeShare}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto">
        {/* 2. Hero / Welcome Section (중앙 환영 메시지) */}
        <HeroSection />

        {/* 3. Action Choice Cards (핵심 선택 영역 - 2분할 카드) */}
        <ActionCards
          onOpenInstallGuide={() => setIsInstallGuideOpen(true)}
          detectedOSName={browserInfo}
        />

        {/* 4. Quick Services Snapshot */}
        <ServicesOverview />

        {/* 5. Branch Direct Support & Location */}
        <BranchInfo />
      </main>

      {/* 6. Footer (하단 고정 영역) */}
      <Footer />

      {/* Modals */}
      <InstallGuideModal
        isOpen={isInstallGuideOpen}
        onClose={() => setIsInstallGuideOpen(false)}
        initialOS={detectedOS}
        onCopyUrl={handleCopyUrl}
        isCopied={isCopied}
      />

      <QrShareModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        onCopyUrl={handleCopyUrl}
        isCopied={isCopied}
      />
    </div>
  );
}
