import React, { useState } from 'react';
import { X, Send, Calendar, MapPin, User, Mail, Phone, CheckCircle, Sparkles } from 'lucide-react';
import { photographerConfig } from '../../config/photographerConfig';

export const BookingModal = ({ isOpen, onClose, initialScope = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    venueLocation: '',
    eventType: 'Wedding & Reception',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border-2 border-purple-300 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white p-6 flex items-center justify-between border-b-2 border-purple-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-purple-700 border border-purple-300 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                Request Formal Proposal
              </h3>
              <p className="text-xs text-purple-200 font-mono uppercase tracking-widest pt-0.5">
                {photographerConfig.brandName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-3xl text-[#000000] font-bold">
                Proposal Request Received!
              </h4>
              <p className="text-sm text-[#000000] font-semibold max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-purple-700">{formData.name}</strong>. Arjun and team will review your event dates and send a customized proposal within 24 hours.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-purple-700 text-white text-xs uppercase font-extrabold tracking-[0.2em] rounded-sm hover:bg-purple-800 transition-colors shadow-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Selected Scope Pills Summary */}
              {initialScope.length > 0 && (
                <div className="p-4 bg-[#FAF7FD] border border-purple-200 rounded-sm space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-purple-900 font-extrabold block">
                    Selected Event Scope:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {initialScope.map((item, idx) => (
                      <span key={idx} className="text-xs font-mono font-bold text-purple-900 bg-purple-100 border border-purple-300 px-2.5 py-1 rounded">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#000000] uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-purple-700 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full pl-10 pr-4 py-3 bg-white border-2 border-purple-200 rounded-sm text-sm text-[#000000] font-semibold focus:border-purple-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#000000] uppercase tracking-wider block">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-purple-700 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full pl-10 pr-4 py-3 bg-white border-2 border-purple-200 rounded-sm text-sm text-[#000000] font-semibold focus:border-purple-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#000000] uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-purple-700 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full pl-10 pr-4 py-3 bg-white border-2 border-purple-200 rounded-sm text-sm text-[#000000] font-semibold focus:border-purple-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#000000] uppercase tracking-wider block">
                    Tentative Event Date(s) *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-purple-700 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full pl-10 pr-4 py-3 bg-white border-2 border-purple-200 rounded-sm text-sm text-[#000000] font-semibold focus:border-purple-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#000000] uppercase tracking-wider block">
                  City / Venue Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-purple-700 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="venueLocation"
                    required
                    value={formData.venueLocation}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full pl-10 pr-4 py-3 bg-white border-2 border-purple-200 rounded-sm text-sm text-[#000000] font-semibold focus:border-purple-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#000000] uppercase tracking-wider block">
                  Special Notes / Vision (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-3 bg-white border-2 border-purple-200 rounded-sm text-sm text-[#000000] font-semibold focus:border-purple-600 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-extrabold uppercase tracking-[0.2em] text-xs rounded-sm transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Formal Proposal Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
