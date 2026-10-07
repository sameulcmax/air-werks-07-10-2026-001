import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Sparkles, RefreshCw } from 'lucide-react';

export const ContactForm: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    year: '2023',
    make: 'Ford',
    model: '',
    engine: '',
    fuelType: 'Gas' as 'Gas' | 'Diesel',
    inquiryType: 'Cold Air Intake Sourcing & Installation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const mailtoSubject = encodeURIComponent(`Air Werks Inquiry: ${formData.inquiryType} - ${formData.year} ${formData.make} ${formData.model}`);
  const mailtoBody = encodeURIComponent(
    `Air Werks Contact Message:\n\n` +
    `Name: ${formData.fullName}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}\n` +
    `Vehicle: ${formData.year} ${formData.make} ${formData.model} (${formData.engine} - ${formData.fuelType})\n` +
    `Looking For: ${formData.inquiryType}\n` +
    `Message:\n${formData.message}\n`
  );

  if (submitted) {
    return (
      <div className={`bg-[#11151A] rounded-2xl border border-[#2E3743] p-8 text-center space-y-5 ${className}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-white">Inquiry Prepared!</h3>
        <p className="text-sm text-[#B9C0C8] max-w-md mx-auto leading-relaxed">
          Thanks for reaching out, <strong className="text-white">{formData.fullName}</strong>. We look forward to talking truck performance with you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:info@airwerksperformance.placeholder?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#078FE8]/25"
          >
            <Mail className="w-4 h-4" />
            Launch Mail App
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1B2026] hover:bg-[#222832] border border-[#2E3743] text-sm text-[#B9C0C8] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 sm:p-8 shadow-xl space-y-4 ${className}`}>
      <div className="flex items-center gap-2 text-[#078FE8] text-xs font-mono font-bold uppercase tracking-wider">
        <Sparkles className="w-4 h-4" />
        Air Werks Specialist Contact
      </div>
      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
        Send Us a Message
      </h3>
      <p className="text-xs text-[#B9C0C8]">
        Have a question about fitment, brand differences, or installation availability? Fill out your truck info below.
      </p>

      {/* Contact Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div>
          <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">Full Name *</label>
          <input
            type="text"
            placeholder="John Doe"
            required
            value={formData.fullName}
            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">Phone Number *</label>
          <input
            type="tel"
            placeholder="(555) 000-0000"
            required
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
          />
        </div>
      </div>

      {/* Email & Inquiry Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">Email Address *</label>
          <input
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">Inquiry Purpose</label>
          <select
            value={formData.inquiryType}
            onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm cursor-pointer"
          >
            <option value="Cold Air Intake Sourcing & Installation" className="bg-[#11151A]">Intake Sourcing & Installation</option>
            <option value="Fitment Verification Question" className="bg-[#11151A]">Fitment Verification Question</option>
            <option value="Brand Recommendation (S&B vs aFe vs K&N)" className="bg-[#11151A]">Brand Comparison Advice</option>
            <option value="Filter Maintenance & Replacement Media" className="bg-[#11151A]">Filter Media Advice</option>
            <option value="General Inquiries" className="bg-[#11151A]">General Inquiry</option>
          </select>
        </div>
      </div>

      {/* Truck Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div>
          <label className="block text-[11px] font-mono text-[#8A939E] uppercase mb-1">Year</label>
          <input
            type="text"
            placeholder="2023"
            value={formData.year}
            onChange={e => setFormData({ ...formData, year: e.target.value })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-[11px] font-mono text-[#8A939E] uppercase mb-1">Make</label>
          <select
            value={formData.make}
            onChange={e => setFormData({ ...formData, make: e.target.value })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2 text-sm cursor-pointer"
          >
            <option value="Ford" className="bg-[#11151A]">Ford</option>
            <option value="Chevrolet" className="bg-[#11151A]">Chevrolet</option>
            <option value="GMC" className="bg-[#11151A]">GMC</option>
            <option value="RAM" className="bg-[#11151A]">RAM</option>
            <option value="Toyota" className="bg-[#11151A]">Toyota</option>
            <option value="Other" className="bg-[#11151A]">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-mono text-[#8A939E] uppercase mb-1">Model</label>
          <input
            type="text"
            placeholder="F-250, Sierra HD..."
            value={formData.model}
            onChange={e => setFormData({ ...formData, model: e.target.value })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-[11px] font-mono text-[#8A939E] uppercase mb-1">Fuel Type</label>
          <select
            value={formData.fuelType}
            onChange={e => setFormData({ ...formData, fuelType: e.target.value as any })}
            className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2 text-sm cursor-pointer"
          >
            <option value="Gas" className="bg-[#11151A]">Gasoline</option>
            <option value="Diesel" className="bg-[#11151A]">Diesel</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">Engine Size / Details (Optional)</label>
        <input
          type="text"
          placeholder="e.g. 6.7L Power Stroke, 5.7L HEMI, 3.5L EcoBoost"
          value={formData.engine}
          onChange={e => setFormData({ ...formData, engine: e.target.value })}
          className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">Message / Questions</label>
        <textarea
          rows={3}
          required
          placeholder="Tell us what you are looking to achieve with your truck build..."
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#078FE8]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? 'Processing...' : 'SEND INQUIRY'}
        </button>
      </div>
    </form>
  );
};
