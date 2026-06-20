/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  HelpCircle, 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  Search, 
  MapPin, 
  Activity,
  Calculator,
  Flame,
  Globe,
  Settings
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { CalculatorInputs, CalculationResult } from '../types';

interface GmbCalculatorProps {
  onOpenAudit: () => void;
}

// Custom Indian Number Formatter
const formatINR = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

export default function GmbCalculator({ onOpenAudit }: GmbCalculatorProps) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyLeads: 100,
    avgValue: 3500,
    visibilityIncrease: 40,
    includeCroBooster: true
  });

  const [activePreset, setActivePreset] = useState<string>('Custom');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Industry Preset Profiles (Leads, Value, Segment Name)
  const presets = [
    { name: 'Cafe & Bistro', leads: 220, value: 1200, category: 'F&B' },
    { name: 'Dental Practice', leads: 80, value: 9500, category: 'Medical' },
    { name: 'AC & Home Services', leads: 95, value: 16000, category: 'Services' },
    { name: 'Law & Tech Advisory', leads: 40, value: 45000, category: 'Professional' },
  ];

  const handleApplyPreset = (name: string, leads: number, value: number) => {
    setActivePreset(name);
    setInputs(prev => ({
      ...prev,
      monthlyLeads: leads,
      avgValue: value
    }));
  };

  // Perform Calculations
  const results = useMemo<CalculationResult>(() => {
    const { monthlyLeads, avgValue, visibilityIncrease, includeCroBooster } = inputs;
    
    // Base GMB Visibility leads expansion
    let additionalLeads = monthlyLeads * (visibilityIncrease / 100);
    
    // SP Digital GMB Conversion Rate Optimization Booster (+20% efficiency)
    if (includeCroBooster) {
      additionalLeads = additionalLeads * 1.25; 
    }
    
    // Round leads to nearest integer
    const finalNewLeads = Math.round(additionalLeads);
    const potentialMonthlyIncrease = finalNewLeads * avgValue;
    const potentialAnnualIncrease = potentialMonthlyIncrease * 12;
    const ROI3YearValue = potentialAnnualIncrease * 3;

    return {
      additionalLeads: finalNewLeads,
      potentialMonthlyIncrease,
      potentialAnnualIncrease,
      ROI3YearValue,
      actionsLabel: visibilityIncrease < 30 ? 'Moderate Rank Improvement' : visibilityIncrease < 65 ? 'Local Front-Page Penetration' : 'Complete 3-Pack Monopoly'
    };
  }, [inputs]);

  // Generate 6-month projection data for Recharts
  const chartData = useMemo(() => {
    const { monthlyLeads, avgValue } = inputs;
    const baseMonthlyValue = monthlyLeads * avgValue;
    const optimizedMonthlyValue = baseMonthlyValue + results.potentialMonthlyIncrease;

    return Array.from({ length: 6 }, (_, index) => {
      const monthNum = index + 1;
      return {
        name: `Month ${monthNum}`,
        'Current Revenue': baseMonthlyValue * monthNum,
        'With SP Digital': optimizedMonthlyValue * monthNum,
        incrementalGain: results.potentialMonthlyIncrease * monthNum
      };
    });
  }, [inputs, results]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12" id="calculator-section">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600">
          <Calculator className="h-3.5 w-3.5 text-blue-500" />
          Interactive GMB Analytics System
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          How much is poor GMB rank costing you?
        </h2>
        <p className="text-slate-600 text-sm md:text-base">
          Adjust the parameters to estimate the immediate commercial footprint of upgrading your business to Google’s Local 3-Pack.
        </p>
      </div>

      {/* Main Bento Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Sliders / Inputs (Clean White Theme Accent) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 lg:col-span-7 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-slate-900">
                Configure Your Local Metrics
              </h3>
              <div className="text-xs text-slate-500 font-medium">
                Step-by-step estimates
              </div>
            </div>

            {/* Industry Presets Quick Select */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Quick Industry Presets:
              </span>
              <div className="flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => handleApplyPreset(p.name, p.leads, p.value)}
                    type="button"
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      activePreset === p.name
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setActivePreset('Custom')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    activePreset === 'Custom'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  Custom Manual
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Slider 1: Current Monthly Walk-ins / Leads */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  Current Monthly Leads & Walk-ins
                  <TooltipIcon text="Any visitor coming from GMB Map results, calls, search clicks, store direction requests, or localized form submissions." />
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={inputs.monthlyLeads}
                    min="5"
                    max="1000"
                    onChange={(e) => {
                      const val = Math.min(1000, Math.max(5, Number(e.target.value)));
                      setInputs(prev => ({ ...prev, monthlyLeads: val }));
                      setActivePreset('Custom');
                    }}
                    className="w-20 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded px-2 py-0.5 text-right font-mono text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                  <span className="text-xs text-slate-500">leads</span>
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                value={inputs.monthlyLeads}
                onChange={(e) => {
                  setInputs(prev => ({ ...prev, monthlyLeads: Number(e.target.value) }));
                  setActivePreset('Custom');
                }}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
                <span>10 Leads</span>
                <span>500 Leads</span>
                <span>1,000 Leads</span>
              </div>
            </div>

            {/* Slider 2: Average Customer Value (INR) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  Average Customer Value (in INR)
                  <TooltipIcon text="The standard commercial trade value generated from a single local purchase, services retainer, or lifetime patient cycle." />
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400">₹</span>
                  <input
                    type="number"
                    value={inputs.avgValue}
                    min="100"
                    max="200000"
                    onChange={(e) => {
                      const val = Math.min(200000, Math.max(100, Number(e.target.value)));
                      setInputs(prev => ({ ...prev, avgValue: val }));
                      setActivePreset('Custom');
                    }}
                    className="w-28 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded px-2 py-0.5 text-right font-mono text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <input
                type="range"
                min="500"
                max="150000"
                step="500"
                value={inputs.avgValue}
                onChange={(e) => {
                  setInputs(prev => ({ ...prev, avgValue: Number(e.target.value) }));
                  setActivePreset('Custom');
                }}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
                <span>₹500</span>
                <span>₹75,000</span>
                <span>₹1,50,000</span>
              </div>
            </div>

            {/* Slider 3: Estimated GMB Visibility Increase */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  Estimated GMB Visibility Increase
                  <TooltipIcon text="The overall percentage expansion in traffic and search visibility with active Google My Business optimization (rank rising from local pages to Top 3 spots)." />
                </span>
                <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-mono font-bold">
                  +{inputs.visibilityIncrease}%
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="5"
                value={inputs.visibilityIncrease}
                onChange={(e) => setInputs(prev => ({ ...prev, visibilityIncrease: Math.min(100, Math.max(10, Number(e.target.value))) }))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
                <span>10% (Basic Rise)</span>
                <span>50% (High Exposure)</span>
                <span>100% (Absolute Dominance)</span>
              </div>

              {/* Dynamic Strategy Pill */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-3">
                <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-4 w-4 text-blue-600 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    Strategy Impact: {results.actionsLabel}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {inputs.visibilityIncrease <= 30 
                      ? 'Solid optimization. Aligns directories and updates keywords to secure general local views.' 
                      : inputs.visibilityIncrease <= 65 
                      ? 'High-tier visibility. Business will rank among search-intensive "near me" keyword strings.' 
                      : 'Absolute local saturation. Locks you into the coveted Google Map 3-Pack, outperforming rivals.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced toggle toggle for Conversion Booster */}
            <div className="border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <Settings className={`h-3 w-3 transition-transform ${showAdvanced ? 'rotate-90' : ''}`} />
                {showAdvanced ? 'Hide Advanced SEO Variables' : 'Show Advanced SEO Variables'}
              </button>

              {showAdvanced && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 bg-blue-50/50 border border-blue-100/60 rounded-xl p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1">
                        Active Conversion Rate Booster (+25% efficiency)
                        <Sparkles className="h-3 w-3 text-amber-500" />
                      </h4>
                      <p className="text-[11px] text-blue-700/80 leading-relaxed max-w-sm">
                        Unlock a 25% incremental visitor action score by having SP Digital optimize your GMB profile visuals (High-resolution imagery, booking CTA linkages, stellar automated review campaigns).
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={inputs.includeCroBooster}
                        onChange={(e) => setInputs(prev => ({ ...prev, includeCroBooster: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </motion.div>
              )}
            </div>

          </div>

          <p className="text-[11px] text-slate-400 mt-2 italic">
            *Based on SP Digital regional research and Google Maps conversion benchmarks. Adjust inputs to fit your realistic local market.
          </p>
        </div>

        {/* Right Side: ROI Output (Dark Blue Professional Tech Theme Accent) */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 lg:col-span-5 text-white flex flex-col justify-between space-y-8 relative overflow-hidden shadow-xl">
          
          {/* Subtle Ambient light backdrops */}
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest w-fit mb-3">
              <Flame className="h-3 w-3 text-emerald-400 animate-bounce" /> Real-time ROI Projection
            </div>

            <h3 className="font-display text-lg font-bold">Your GMB Potential Growth Model</h3>
            <p className="text-slate-400 text-xs mt-1">Expected returns from SP Digital local optimizations</p>

            {/* Instant dynamic Revenue Visual block */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/65 border border-slate-800/80 backdrop-blur-md">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                Potential Month 1 Revenue Increase:
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display text-3xl md:text-4xl font-extrabold text-blue-400 tracking-tight glow-blue">
                  {formatINR(results.potentialMonthlyIncrease)}
                </span>
                <span className="text-xs font-semibold text-emerald-400 font-mono">
                  /Mo
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-blue-400" />
                Adds approx. <span className="text-white font-semibold">+{results.additionalLeads}</span> monthly booking triggers to your pipeline.
              </p>
            </div>

            {/* Annual Return */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-slate-950/40 border border-slate-800/40 rounded-xl">
                <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                  Projected Year 1 Jump
                </span>
                <span className="font-display text-lg font-bold text-emerald-400 block mt-1">
                  {formatINR(results.potentialAnnualIncrease)}
                </span>
              </div>
              <div className="p-3 bg-slate-950/40 border border-slate-800/40 rounded-xl">
                <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                  3-Yr Lifetime GMB Value
                </span>
                <span className="font-display text-lg font-bold text-cyan-400 block mt-1">
                  {formatINR(results.ROI3YearValue)}
                </span>
              </div>
            </div>

            {/* Mini Progress Ring/Metrics Gauge */}
            <div className="mt-6 border-t border-slate-800/80 pt-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400">Total Pipeline Expansion:</span>
                <span className="text-emerald-400">+{inputs.visibilityIncrease}% Visibility</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${inputs.visibilityIncrease}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Action-Oriented CTA details */}
          <div className="relative pt-4 border-t border-slate-800/80">
            <div className="text-xs text-slate-300 leading-relaxed mb-4">
              Our Local Search strategies target high-intent buyers searching *specifically* in physical range of your store.
            </div>
            
            <button
              onClick={onOpenAudit}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-blue-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              Secure Audit Slot <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

      {/* Embedded Dynamic Revenue Comparison Chart (Satisfy recharts for data visualization constraint) */}
      <div className="mt-12 bg-white border border-slate-200 shadow-md rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900">
              6-Month Estimated Revenue Velocity Map
            </h3>
            <p className="text-slate-500 text-xs">
              Comparing standard organic inertia with SP Digital optimized Google Maps rank execution.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span> Standard GMB Trend
            </span>
            <span className="flex items-center gap-1.5 text-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span> Optimized Map Target
            </span>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={10} 
                fontWeight={600} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={10} 
                fontWeight={600} 
                tickFormatter={(val) => `₹${val / 1000}k`}
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip 
                formatter={(value: any) => [formatINR(Number(value)), 'Cumulative Revenue']}
                contentStyle={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
              />
              <Area 
                type="monotone" 
                dataKey="Current Revenue" 
                stroke="#94a3b8" 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#colorCurrent)" 
              />
              <Area 
                type="monotone" 
                dataKey="With SP Digital" 
                stroke="#2563eb" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorOptimized)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-[10px] text-slate-500 font-medium mt-2">
          *Optimized curve estimates compounding gains from daily high-authority maps citations, ranking climb, and localized authority.
        </p>
      </div>

    </div>
  );
}

// Tooltip Auxiliary Helper Component
function TooltipIcon({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block cursor-help ml-1">
      <HelpCircle 
        className="h-3.5 w-3.5 text-slate-400 hover:text-slate-600" 
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      />
      {visible && (
        <span className="absolute z-20 left-1/2 -translate-x-1/2 bottom-full mb-1.5 w-56 p-2 rounded-lg bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-medium leading-relaxed shadow-xl text-center">
          {text}
        </span>
      )}
    </span>
  );
}
