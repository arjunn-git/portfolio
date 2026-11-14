import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { PRICING_PLANS } from '../../data/pricing';

interface PricingProps {
  onRequestQuote: (tierName: string) => void;
}

type Currency = 'USD' | 'INR' | 'GBP';

export const Pricing: React.FC<PricingProps> = ({ onRequestQuote }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  return (
    <section id="pricing" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="telemetry-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <span>06 // TRANSPARENT INVESTMENT</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
              SIMPLE PROJECT PACKAGES.
            </h2>
          </div>

          {/* Currency Toggle Controls */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slateNavy border border-steelBlue/20">
            <span className="font-mono text-xs text-mutedGrey px-2 uppercase">CURRENCY:</span>
            {(['USD', 'INR', 'GBP'] as Currency[]).map((cur) => (
              <button
                key={cur}
                type="button"
                onClick={() => setCurrency(cur)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all ${
                  currency === cur
                    ? 'bg-electricBlue text-white shadow-electric-glow'
                    : 'text-steelBlue hover:text-iceWhite'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                plan.popular
                  ? 'bg-slateNavy/90 border-electricBlue shadow-electric-card'
                  : 'bg-slateNavy/40 border-steelBlue/20 hover:border-steelBlue/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-electricBlue text-white font-mono text-[10px] font-bold tracking-widest uppercase shadow-electric-glow">
                  MOST POPULAR FOR TEAMS
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-display font-bold text-2xl text-iceWhite mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-steelBlue mb-6 font-light leading-relaxed">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-iceWhite mb-1">
                    {plan.pricing[currency]}
                  </div>
                  <span className="font-mono text-[11px] text-mutedGrey uppercase">
                    ESTIMATED SCOPE · FLEXIBLE MILESTONES
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-mutedGrey">
                      <div className="w-4 h-4 rounded-full bg-electricBlue/20 border border-electricBlue/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-electricBlue" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onRequestQuote(plan.name)}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                  plan.popular
                    ? 'bg-electricBlue hover:bg-electricBlue-hover text-white shadow-electric-glow'
                    : 'bg-slateNavy hover:bg-slateNavy-light text-iceWhite border border-steelBlue/20 hover:border-electricBlue'
                }`}
              >
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Transparent Business Standards Note */}
        <div className="mt-12 text-center text-xs font-mono text-mutedGrey max-w-xl mx-auto">
          * ALL PRICING ESTIMATES ARE CONFIGURABLE BASED ON EXACT ARCHITECTURAL SCOPE AND DELIVERABLES. ZERO INVENTED HIDDEN FEES.
        </div>
      </div>
    </section>
  );
};
