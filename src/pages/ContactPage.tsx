import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/common/ContactForm';
import { FAQ_DATA } from '../data/faqs';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronDown 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-20 space-y-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="LET'S TALK ABOUT"
          highlight="YOUR TRUCK."
          subtitle="Whether you have questions about fitment, brand options, or bay availability, our cold air intake specialists are here to help."
          alignment="center"
        />
      </section>

      {/* Main Grid: Left Info Placeholders + Right Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#078FE8] font-bold block mb-1">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="text-xl font-bold text-white">
                  Air Werks Headquarters
                </h3>
                <p className="text-xs text-[#B9C0C8] mt-1">
                  Connect with our technical intake team for vehicle fitment inquiries.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#2E3743]">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#181D24] border border-[#2E3743] text-[#078FE8] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8A939E] uppercase block">Phone / Direct Line</span>
                    <span className="text-sm font-bold text-white font-mono">
                      (800) AIR-WERK / [Client Phone Placeholder]
                    </span>
                    <p className="text-[11px] text-[#8A939E] mt-0.5">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#181D24] border border-[#2E3743] text-[#078FE8] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8A939E] uppercase block">Email Inquiries</span>
                    <span className="text-sm font-bold text-white font-mono">
                      quotes@airwerks.placeholder
                    </span>
                    <p className="text-[11px] text-[#8A939E] mt-0.5">Fitment review within 24 hours</p>
                  </div>
                </div>

                {/* Bay Facility */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#181D24] border border-[#2E3743] text-[#078FE8] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8A939E] uppercase block">Installation Facility</span>
                    <span className="text-sm font-bold text-white">
                      Air Werks Performance Installation Bay
                    </span>
                    <p className="text-[11px] text-[#8A939E] mt-0.5">[Dedicated Facility Address Placeholder]</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#181D24] border border-[#2E3743] text-[#078FE8] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8A939E] uppercase block">Bay Operating Hours</span>
                    <span className="text-sm font-bold text-white">
                      By Confirmed Appointment
                    </span>
                    <p className="text-[11px] text-[#8A939E] mt-0.5">Monday – Friday: 8:00 AM – 5:30 PM<br />Saturday: 9:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Box */}
            <div className="bg-[#181D24] rounded-2xl border border-[#2E3743] p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#078FE8]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h4 className="text-sm font-bold text-white font-mono uppercase">
                  Application Verification
                </h4>
              </div>
              <p className="text-xs text-[#B9C0C8] leading-relaxed">
                Every intake quote is cross-checked against your vehicle’s factory engine airbox design and sensor configuration before confirmation.
              </p>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <SectionHeading
          badge="KNOWLEDGE BASE"
          title="COMMONLY ASKED QUESTIONS"
          subtitle="Answers to common questions regarding intake fitment, warranties, and scheduling."
          alignment="center"
        />

        <div className="space-y-3 mt-10">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#11151A] rounded-2xl border border-[#2E3743] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-[#078FE8] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#078FE8] px-2 py-0.5 rounded bg-[#078FE8]/10 border border-[#078FE8]/20">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8A939E] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#078FE8]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#B9C0C8] leading-relaxed border-t border-[#2E3743]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
