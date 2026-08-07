import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, User, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-white via-purple-50/80 to-purple-100/90 border-4 border-purple-300 p-10 sm:p-14 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center shadow-inner border-2 border-purple-300">
          <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#000000] font-black">Message Received!</h3>
          <p className="text-[#000000] text-base font-semibold max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Arjun and the studio team will review your enquiry and get back to you shortly.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-8 py-3.5 bg-purple-700 text-white text-xs uppercase font-extrabold tracking-[0.2em] rounded-xl hover:bg-purple-800 transition-all shadow-lg"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Decorative Ambient Background Glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-white via-[#FAF7FD] to-purple-50/90 border-4 border-purple-300 border-t-8 border-t-purple-700 p-8 sm:p-12 rounded-3xl space-y-7 shadow-[0_25px_60px_-15px_rgba(124,58,237,0.25)] relative overflow-hidden group"
      >
        <div className="flex items-center justify-between border-b border-purple-200 pb-5">
          <span className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 text-purple-950 font-mono font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-700 animate-pulse" />
            <span>DIRECT STUDIO ENQUIRY</span>
          </span>
          <span className="text-xs font-mono font-bold text-purple-800 uppercase tracking-widest hidden sm:inline-block">
            FAST 24H RESPONSE
          </span>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#000000] font-extrabold flex items-center space-x-2">
            <User className="w-3.5 h-3.5 text-purple-700" />
            <span>Your Full Name *</span>
          </label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder=""
            className="w-full bg-white border-2 border-purple-200 text-[#000000] font-bold text-base rounded-xl p-4 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-200/60 shadow-sm transition-all duration-300"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#000000] font-extrabold flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-purple-700" />
              <span>Email Address *</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder=""
              className="w-full bg-white border-2 border-purple-200 text-[#000000] font-bold text-base rounded-xl p-4 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-200/60 shadow-sm transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#000000] font-extrabold flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-purple-700" />
              <span>Phone Number *</span>
            </label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder=""
              className="w-full bg-white border-2 border-purple-200 text-[#000000] font-bold text-base rounded-xl p-4 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-200/60 shadow-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Event Type & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#000000] font-extrabold flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Event Type *</span>
            </label>
            <select
              required
              value={form.eventType}
              onChange={(e) => setForm({ ...form, eventType: e.target.value })}
              className={`w-full bg-white border-2 border-purple-200 font-bold text-base rounded-xl p-4 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-200/60 shadow-sm transition-all duration-300 ${
                form.eventType === '' ? 'text-gray-400 font-normal' : 'text-[#000000]'
              }`}
            >
              <option value="" disabled className="text-gray-400 font-normal">Select Event Type...</option>
              <option value="Wedding" className="text-[#000000] font-bold">Wedding Photography</option>
              <option value="Pre-Wedding" className="text-[#000000] font-bold">Pre-Wedding Shoot</option>
              <option value="Events" className="text-[#000000] font-bold">Event Celebration</option>
              <option value="Portraits" className="text-[#000000] font-bold">Portrait Session</option>
              <option value="Other" className="text-[#000000] font-bold">Other Special Request</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#000000] font-extrabold flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-purple-700" />
              <span>Tentative Event Date</span>
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full bg-white border-2 border-purple-200 text-[#000000] font-bold text-base rounded-xl p-4 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-200/60 shadow-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#000000] font-extrabold flex items-center space-x-2">
            <MessageSquare className="w-3.5 h-3.5 text-purple-700" />
            <span>Message & Requirements *</span>
          </label>
          <textarea
            required
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder=""
            className="w-full bg-white border-2 border-purple-200 text-[#000000] font-bold text-base rounded-xl p-4 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-200/60 shadow-sm transition-all duration-300"
          />
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white font-extrabold uppercase tracking-[0.2em] text-xs sm:text-sm rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center space-x-3 border border-purple-400/30"
        >
          <Send className="w-5 h-5" />
          <span>Send Direct Studio Enquiry</span>
        </button>
      </form>
    </div>
  );
};
