/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  Search, 
  ShieldCheck, 
  Plus, 
  ChevronRight, 
  Star, 
  PhoneCall, 
  CheckCircle,
  FileHeart,
  Briefcase,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';
import GmbCalculator from './components/GmbCalculator';
import AuditModal from './components/AuditModal';

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  // Agency strategic assets
  const keyStrategies = [
    {
      title: "Google Map Pack Dominance",
      description: "Secure your spot on the top 3 spots of Google Maps search queries, extracting over 70% of local service clicks from direct competitors.",
      icon: MapPin,
      color: "text-blue-500 bg-blue-50"
    },
    {
      title: "Dynamic Citations Network",
      description: "Perfect synchronization of your NAP (Name, Address, Phone) registry parameters across high-authority indexes to build trust with Google's algorithm.",
      icon: BadgeCheckIcon,
      color: "text-indigo-500 bg-indigo-50"
    },
    {
      title: "Auto-Triggered Review Velocity",
      description: "Automated, frictionless review solicitation funnels via SMS & WhatsApp to increase customer confidence and outpace competitor feedback scores.",
      icon: Star,
      color: "text-amber-500 bg-amber-50"
    },
    {
      title: "Interactive GMB Updates",
      description: "Geo-targeted agency posts, optimized business attribute clusters, and professional Q&As that signal constant vitality to crawl algorithms.",
      icon: TrendingUp,
      color: "text-cyan-500 bg-cyan-50"
    }
  ];

  const successBenchmarks = [
    { metric: "+182%", label: "Average GMB Clicks Boost" },
    { metric: "4.9★", label: "Optimized Review Standard" },
    { metric: "₹0.00", label: "CPC Ads Ad Spend Required" },
    { metric: "Top-3", label: "Typical Map Pack Target" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col justify-between">
      
      {/* Top Banner Info Ribbon */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs font-semibold text-center border-b border-slate-800/60 shadow-inner flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span className="flex items-center gap-1 text-blue-400">
          <Sparkles className="h-3 w-3 animate-spin" />
          Exclusive Q3 Audit Offer
        </span>
        <span className="text-slate-400"> | </span>
        <span>Secure free comprehensive analysis on Indian localized Search Map packs</span>
        <span className="text-slate-400"> | </span>
        <button 
          onClick={() => setIsAuditOpen(true)}
          className="text-white hover:text-blue-400 underline decoration-blue-500 cursor-pointer font-bold"
        >
          Book Your Live Free Audit Now →
        </button>
      </div>

      {/* Main Premium Navbar Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/10">
              <span className="text-white font-display font-extrabold text-xl tracking-tighter">SP</span>
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                SP Digital Journey
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 block">
                Local SEO & GMB Consultancy
              </span>
            </div>
          </div>

          {/* Action Call Header Button */}
          <button
            onClick={() => setIsAuditOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all cursor-pointer shadow border border-slate-900/10 hover:shadow-md"
          >
            <PhoneCall className="h-3.5 w-3.5 text-blue-400" />
            Book Free Audit
          </button>
        </div>
      </header>

      {/* Main Core Content Wrapper */}
      <main className="flex-grow">
        
        {/* Modern Interactive Hero Section */}
        <section className="relative overflow-hidden bg-white pt-10 pb-6 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-xs font-semibold text-blue-600">
                <Award className="h-3.5 w-3.5" /> Google My Business Optimization
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                Get Found. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 drop-shadow-sm">
                  Dominate Your Local Map Pack.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
                76% of nearby mobile queries visit a storefront within 24 hours. If your medical practice, legal chamber, or retail shop isn't in Google's coveted Local 3-Pack, you are serving leads directly to your competitors on a silver platter.
              </p>

              {/* Benchmarks grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {successBenchmarks.map((b) => (
                  <div key={b.label} className="border border-slate-100 bg-slate-50/55 p-3 rounded-xl">
                    <span className="block font-display text-2xl font-extrabold text-slate-900">{b.metric}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Interactive Calling Card/Graphics */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl text-white relative">
              <span className="absolute top-2 right-2 text-[9px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">
                GMB BENCHMARKS
              </span>
              <h3 className="font-display text-sm font-bold tracking-wide uppercase text-slate-400 mb-3 block">
                The Anatomy of Local Rank
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-950/45 border border-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                    <span className="text-slate-300 font-medium">Standard Search View:</span>
                  </div>
                  <span className="font-semibold text-slate-100">Only 4%-9% CTR</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-blue-950/45 border border-blue-900/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-slate-200 font-medium">Google Maps 3-Pack Spot:</span>
                  </div>
                  <span className="font-extrabold text-blue-400">Over 56% High-Intent Leads</span>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-4 mt-4 text-[11px] text-slate-400 leading-relaxed">
                "Our proprietary 4-step local ranking engine coordinates citations, localizes web assets, and automates real review velocity to lock your position on top."
              </div>

              <button
                onClick={() => {
                  const target = document.getElementById('calculator-section');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center block mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
              >
                Estimate Your Revenue Opportunity Below ↓
              </button>
            </div>

          </div>
        </section>

        {/* Dynamic Calculator Interactive Area Content block */}
        <section className="bg-slate-100/60 py-6 border-b border-slate-200">
          <GmbCalculator onOpenAudit={() => setIsAuditOpen(true)} />
        </section>

        {/* Solutions Pillars / Agency Capability Framework */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
                PROVEN EXECUTION ARCHITECTURE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                The SP Digital Local SEO Optimization Blueprint
              </h2>
              <p className="text-slate-500 text-sm">
                We do not use cheap tricks. We employ structured, white-hat citation science and localized signal engines compatible with Google's search algorithms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {keyStrategies.map((s) => (
                <div key={s.title} className="p-6 border border-slate-200/80 hover:border-slate-300 rounded-2xl bg-slate-50/50 transition-all flex gap-4">
                  <div className={`p-3 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${s.color}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-slate-900 text-base">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Impact Bottom Call to Action Section (Prominent "Book Free Audit" triggers modal) */}
        <section className="bg-slate-900 text-white relative py-16 overflow-hidden">
          
          {/* Ambient styling background */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 opacity-90" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                Tailored Local Deep Dive
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Claim Your Free SP Digital Visibility Audit
              </h2>
              
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                We will pull your competitors' citation profile, crawl local GMB rankings for your top terms, and give you a written 3-spot optimization blueprint. Completely free. No pushy sales pitch.
              </p>
            </div>

            {/* Large high-impact audit booking trigger button */}
            <div className="flex flex-col items-center justify-center gap-4">
              <button
                onClick={() => setIsAuditOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-extrabold text-base tracking-wide rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group border border-blue-400/20"
              >
                <span>Book a Free Visibility Audit</span>
                <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-semibold mt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> Free written report
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> 20-minute Zoom strategy call
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> No commitments required
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Structured Clean Footer Area */}
      <footer className="bg-slate-950 text-slate-500 text-xs py-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-display font-bold text-slate-300">SP Digital Journey</div>
            <p className="text-slate-600 mt-1">Empowering local enterprise, retail, and healthcare brands with high-authority local Search relevance.</p>
          </div>
          <div className="text-slate-600 font-medium md:text-right">
            <span>© 2026 SP Digital Journey. All rights reserved.</span>
            <span className="block text-[10px] text-slate-700/80 font-mono mt-1">Powered by Precision local indexing engines.</span>
          </div>
        </div>
      </footer>

      {/* Dynamic Lead Generation booking modal instance */}
      <AuditModal 
        isOpen={isAuditOpen} 
        onClose={() => setIsAuditOpen(false)} 
      />

    </div>
  );
}

// Auxiliary Replacement of ShieldCheck as BadgeCheckIcon to keep it looking pristine
function BadgeCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={props.className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  );
}
