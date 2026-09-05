import React, { useState } from 'react';
import { X, Check, Calendar, Clock, Mail, User, Building } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    preferredDate: '2026-09-10',
    preferredTime: '10:00 AM EST',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div
      id="demo-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        id="demo-modal-dialog"
        className="relative w-full max-w-lg bg-neutral-950 border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-demo-modal"
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Async Labs</span>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mt-1">
                See What&apos;s Visible
              </h3>
              <p className="text-sm text-white/70 mt-2">
                Experience a screen that asks nothing of you. Your day stays visible, and your attention stays yours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Company</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 rounded-xl pl-10 pr-2 py-2 text-xs text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Preferred Time</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 rounded-xl pl-10 pr-2 py-2 text-xs text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="10:00 AM EST">10:00 AM EST</option>
                      <option value="1:00 PM EST">1:00 PM EST</option>
                      <option value="3:30 PM EST">3:30 PM EST</option>
                      <option value="5:00 PM EST">5:00 PM EST</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  id="confirm-booking-btn"
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-neutral-200 transition-colors text-sm cursor-pointer shadow-lg"
                >
                  Confirm Demo Booking
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
              <Check className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-2xl font-normal text-white">Demo Scheduled!</h4>
            <p className="text-sm text-white/70 max-w-sm mx-auto">
              We&apos;ve sent a calendar invite with Zoom link to{' '}
              <span className="text-white font-medium">{formData.email || 'your email'}</span> for{' '}
              <span className="text-white font-medium">{formData.preferredDate}</span> at{' '}
              <span className="text-white font-medium">{formData.preferredTime}</span>.
            </p>
            <div className="pt-3">
              <button
                id="done-booking-btn"
                onClick={handleReset}
                className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors text-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
