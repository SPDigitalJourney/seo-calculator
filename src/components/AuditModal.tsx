/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  FileText,
  AlertCircle
} from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    gmbName: '',
    city: '',
    fullName: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableHours = [
    '10:00 AMIST',
    '11:30 AM IST',
    '02:00 PM IST',
    '03:30 PM IST',
    '05:00 PM IST',
  ];

  // Simple validation helper
  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';
      if (!formData.gmbName.trim()) newErrors.gmbName = 'GMB listing description or keyword is required';
      if (!formData.city.trim()) newErrors.city = 'Local target area (City) is required';
    } else if (currentStep === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please provide a valid email';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (formData.phone.length < 8) {
        newErrors.phone = 'Please provide a valid phone number';
      }
    } else if (currentStep === 3) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setStep(4); // Success step
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl text-white"
        >
          {/* Header */}
          <div className="border-b border-slate-800 bg-slate-950/40 px-6 py-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                SP Digital Journey
              </span>
              <h3 className="font-display text-lg font-bold">
                Book Free GMB Visibility Audit
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          {step <= 3 && (
            <div className="bg-slate-950 px-6 py-3 flex items-center space-x-2 text-xs border-b border-slate-800/50">
              <div className="flex items-center space-x-1">
                <span className={`h-5 w-5 rounded-full flex items-center justify-center font-semibold text-[10px] ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>1</span>
                <span className={step === 1 ? 'font-medium text-blue-400' : 'text-slate-400'}>GMB Details</span>
              </div>
              <span className="text-slate-600">/</span>
              <div className="flex items-center space-x-1">
                <span className={`h-5 w-5 rounded-full flex items-center justify-center font-semibold text-[10px] ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>2</span>
                <span className={step === 2 ? 'font-medium text-blue-400' : 'text-slate-400'}>Contact Info</span>
              </div>
              <span className="text-slate-600">/</span>
              <div className="flex items-center space-x-1">
                <span className={`h-5 w-5 rounded-full flex items-center justify-center font-semibold text-[10px] ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>3</span>
                <span className={step === 3 ? 'font-medium text-blue-400' : 'text-slate-400'}>Schedule Call</span>
              </div>
            </div>
          )}

          {/* Content Body */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-slate-300">
                    Tell us about your business. Our Local SEO architects will crawl your competitor listings and audit your Google My Business footprint before our call.
                  </p>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 block">Registered Business Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Building className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        placeholder="e.g., SP Royal Dental Clinic"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    {errors.businessName && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.businessName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 block">Google Maps GMB Listing Name or Main Keyword</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.gmbName}
                        onChange={(e) => handleInputChange('gmbName', e.target.value)}
                        placeholder="e.g., Dentist near me / SP Dental"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    {errors.gmbName && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.gmbName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 block">Target City / Local Area</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="e.g., Mumbai, Maharashtra / Indiranagar, Bengaluru"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    {errors.city && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.city}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-slate-300">
                    Who should we send our custom-assembled growth roadmap to? Enter your core point of contact detail below.
                  </p>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 block">Your Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="e.g., Siddharth Patel"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 block">Corporate Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Mail className="h-4 w-4" />
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="siddharth@business.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 block">WhatsApp / Contact Number (for report dispatch)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Phone className="h-4 w-4" />
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-slate-300">
                    Pick a convenient date and time slot for your personalized, live GMB Audit Walkthrough with our Lead Solutions Architect.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date Picker */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-400 block">Select Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]} // Can't pick past dates
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
                      />
                      {errors.date && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="h-3 w-3" /> {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Time Slot Picker */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-400 block">Select Available Time Slot</label>
                      <div className="grid grid-cols-1 gap-2">
                        {availableHours.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleInputChange('timeSlot', slot)}
                            className={`py-2 px-3 rounded-lg border text-xs text-left font-medium transition-all ${
                              formData.timeSlot === slot
                                ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <Clock className="h-3.5 w-3.5 text-blue-400" />
                              {slot}
                            </span>
                          </button>
                        ))}
                      </div>
                      {errors.timeSlot && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="h-3 w-3" /> {errors.timeSlot}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="mx-auto h-16 w-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display text-2xl font-bold tracking-tight text-white">
                      Audit Confirmed!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Congratulations! Your custom GMB growth audit has been scheduled for{' '}
                      <span className="text-blue-400 font-semibold">{formData.date}</span> at{' '}
                      <span className="text-blue-400 font-semibold">{formData.timeSlot}</span>.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-left max-w-md mx-auto space-y-3">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-blue-400" /> What SP Digital will analyze of yours:
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>Google Maps ranking for 3 regional target keywords.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>GMB listing optimization score (Images, attributes, categories).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>Competitor "3-Pack" review velocity gap.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>Missing citations and NAP alignment checks.</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-slate-500">
                    A WhatsApp notice with instructions has been dispatched to {formData.fullName} ({formData.phone}).
                  </p>

                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg text-sm transition-transform hover:scale-105"
                  >
                    Close & Keep Exploring
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Action Buttons */}
          {step <= 3 && (
            <div className="border-t border-slate-800 bg-slate-950/40 px-6 py-4 flex items-center justify-between">
              <div>
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                ) : (
                  <span className="text-xs text-slate-500">Step {step} of 3</span>
                )}
              </div>

              <div>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg flex items-center gap-1 transition-colors"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-lg flex items-center gap-1.5 transition-all"
                  >
                    Schedule GMB Audit
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
