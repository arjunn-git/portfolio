import React from 'react';
import { ArrowUpRight, CheckCircle2, Globe, Code, ShoppingBag, Wrench, AppWindow } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { ServiceItem } from '../../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'web-design-dev': <Globe className="w-6 h-6 text-electricBlue" />,
  'frontend-engineering': <Code className="w-6 h-6 text-electricBlue" />,
  'ecommerce-development': <ShoppingBag className="w-6 h-6 text-electricBlue" />,
  'website-maintenance': <Wrench className="w-6 h-6 text-electricBlue" />,
  'saas-web-applications': <AppWindow className="w-6 h-6 text-electricBlue" />,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="telemetry-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <span>04 // FREELANCE SERVICES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
              WHAT I CAN BUILD FOR YOU.
            </h2>
          </div>
          <p className="text-steelBlue max-w-md text-sm sm:text-base font-light">
            "From modern business websites to interactive web applications, I help businesses transform their ideas into professional digital experiences."
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between border border-steelBlue/20 hover:border-electricBlue/50 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-electricBlue/10 rounded-full blur-2xl pointer-events-none group-hover:bg-electricBlue/20 transition-all" />

              <div>
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slateNavy border border-steelBlue/20 flex items-center justify-center shadow-inner group-hover:border-electricBlue transition-colors">
                    {SERVICE_ICONS[service.id]}
                  </div>
                  <span className="font-mono text-[11px] text-steelBlue">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-2xl text-iceWhite mb-3 group-hover:text-electricBlue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-steelBlue text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-8">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-mutedGrey">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electricBlue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional CTA Button */}
              <button
                type="button"
                onClick={() => onSelectService(service.enquiryType)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold tracking-wider text-iceWhite bg-slateNavy hover:bg-electricBlue hover:text-white border border-steelBlue/20 hover:border-electricBlue transition-all duration-200 shadow-sm group/btn"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-electricBlue group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
