import React from 'react';
import { MapPin, Layers, Building2, PhoneCall, ArrowUpRight } from 'lucide-react';
import { QUICK_SERVICES, TARGET_WEBSITE_URL } from '../data/guides';

export const ServicesOverview: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-teal-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-700" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-emerald-600" />;
      default:
        return <MapPin className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="services-overview" className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xs">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              LX 순천지사 주요 업무 안내
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              순천시민을 위한 지적측량 핵심 서비스
            </h3>
          </div>
          <a
            id="link-services-all"
            href={TARGET_WEBSITE_URL}
            className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors self-start sm:self-auto"
          >
            <span>전체 업무 상세 보기</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Quick Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
          {QUICK_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-3.5 rounded-2xl bg-slate-50/90 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-200 transition-all flex items-start space-x-3"
            >
              <div className="p-2.5 bg-white rounded-xl shadow-xs border border-slate-100 flex-shrink-0">
                {getIcon(service.icon)}
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-emerald-700">
                  {service.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
