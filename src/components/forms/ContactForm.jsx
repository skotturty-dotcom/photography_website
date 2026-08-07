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
      <div className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/60 border-t-4 border-t-[#C084FC] p-10 sm:p-14 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm text-center space-y-6 shadow-2xl relative overflow-hidden animated-border-card-active">
        <div className="w-20 h-20 rounded-full bg-[#C084FC] text-purple-950 mx-auto flex items-center justify-center shadow-2xl border-2 border-white">
          <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
        </div>
        <div className="space-y-2">
          <h3 className="font-sans text-3xl sm:text-4xl text-white font-black tracking-tight">Message Received!</h3>
          <p className="text-[#C4B5FD] text-base font-semibold max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Arjun and the studio team will review your enquiry and get back to you shortly.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs uppercase font-extrabold tracking-[0.2em] rounded-tl-xl rounded-br-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl border-2 border-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Decorative Ambient Background Glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/60 border-t-4 border-t-[#C084FC] p-8 sm:p-12 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm space-y-7 shadow-2xl relative overflow-hidden animated-border-card-active group"
      >
        <div className="flex items-center justify-between border-b border-purple-400/30 pb-5">
          <span className="inline-flex items-center space-x-2 bg-white/15 border border-white/30 !text-white font-mono font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C084FC] animate-pulse" />
            <span>DIRECT STUDIO ENQUIRY</span>
          </span>
          <span className="text-xs font-mono font-extrabold !text-[#C4B5FD] uppercase tracking-widest hidden sm:inline-block">
            FAST 24H RESPONSE
          </span>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
            <User className="w-3.5 h-3.5 text-[#C084FC]" />
            <span>Your Full Name *</span>
          </label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name..."
            className="w-full bg-white/95 border-2 border-purple-300 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 shadow-inner transition-all duration-300"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Email Address *</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full bg-white/95 border-2 border-purple-300 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 shadow-inner transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Phone Number *</span>
            </label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 00000 00000"
              className="w-full bg-white/95 border-2 border-purple-300 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 shadow-inner transition-all duration-300"
            />
          </div>
        </div>

        {/* Event Type & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Event Type *</span>
            </label>
            <select
              required
              value={form.eventType}
              onChange={(e) => setForm({ ...form, eventType: e.target.value })}
              className={`w-full bg-white/95 border-2 border-purple-300 font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 shadow-inner transition-all duration-300 ${
                form.eventType === '' ? 'text-gray-500 font-normal' : 'text-[#000000]'
              }`}
            >
              <option value="" disabled className="text-gray-500 font-normal">Select Event Type...</option>
              <option value="Wedding" className="text-[#000000] font-bold">Wedding Photography</option>
              <option value="Pre-Wedding" className="text-[#000000] font-bold">Pre-Wedding Shoot</option>
              <option value="Events" className="text-[#000000] font-bold">Event Celebration</option>
              <option value="Portraits" className="text-[#000000] font-bold">Portrait Session</option>
              <option value="Other" className="text-[#000000] font-bold">Other Special Request</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Tentative Event Date</span>
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full bg-white/95 border-2 border-purple-300 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 shadow-inner transition-all duration-300"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#C084FC]" />
            <span>Message & Requirements *</span>
          </label>
          <textarea
            required
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your celebration, location, and dates..."
            className="w-full bg-white/95 border-2 border-purple-300 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 shadow-inner transition-all duration-300"
          />
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-sans font-black uppercase tracking-[0.25em] text-xs sm:text-sm rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-3 border-2 border-white cursor-pointer"
        >
          <Send className="w-5 h-5" />
          <span>Send Direct Studio Enquiry</span>
        </button>
      </form>
    </div>
  );
};
