import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Send, Calendar, MapPin, User, Mail, Phone, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    hours: '',
    preferredPackage: '',
    budget: '',
    message: '',
    agree: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event Date is required';
    if (!formData.location.trim()) newErrors.location = 'Event Location is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted';
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppRedirect = () => {
    if (!validate()) return;
    const link = getWhatsAppLink('bookingForm', {
      name: formData.name,
      eventType: formData.eventType,
      date: formData.eventDate,
      location: formData.location,
      phone: formData.phone,
    });
    window.open(link, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/60 border-t-4 border-t-[#C084FC] rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm p-10 sm:p-14 text-center space-y-6 animate-fade-in max-w-2xl mx-auto shadow-2xl relative overflow-hidden animated-border-card-active">
        <div className="w-20 h-20 rounded-full bg-[#C084FC] text-purple-950 mx-auto flex items-center justify-center shadow-2xl border-2 border-white">
          <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
        </div>
        <div className="space-y-2">
          <h3 className="font-sans text-3xl sm:text-4xl text-white font-black tracking-tight">Enquiry Submitted!</h3>
          <p className="text-[#C4B5FD] text-base font-semibold max-w-md mx-auto leading-relaxed">
            Your event enquiry has been successfully received. We will check availability for your dates and reach out shortly.
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-black rounded-tl-xl rounded-br-xl flex items-center justify-center space-x-2 shadow-xl border-2 border-white transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Fast Track via WhatsApp</span>
          </button>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                whatsapp: '',
                email: '',
                eventType: '',
                eventDate: '',
                location: '',
                hours: '',
                preferredPackage: '',
                budget: '',
                message: '',
                agree: true,
              });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black hover:from-purple-700 hover:to-pink-700 text-xs uppercase tracking-widest rounded-tl-xl rounded-br-xl shadow-xl border-2 border-white transition-all cursor-pointer"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Decorative Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/60 border-t-4 border-t-[#C084FC] rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm p-8 sm:p-12 space-y-7 shadow-2xl relative overflow-hidden animated-border-card-active group"
      >
        <div className="flex items-center justify-between border-b border-purple-400/30 pb-5">
          <span className="inline-flex items-center space-x-2 bg-white/15 border border-white/30 !text-white font-mono font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C084FC] animate-pulse" />
            <span>DATE AVAILABILITY & RESERVATION</span>
          </span>
          <span className="text-xs font-mono font-extrabold !text-[#C4B5FD] uppercase tracking-widest hidden sm:inline-block">
            DIRECT BOOKING
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <User className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Full Name *</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className={`w-full bg-white/95 border-2 ${
                  errors.name ? 'border-rose-500 ring-2 ring-rose-300' : 'border-purple-300'
                } focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner`}
              />
            </div>
            {errors.name && <p className="text-xs font-bold text-rose-300">{errors.name}</p>}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Phone Number *</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className={`w-full bg-white/95 border-2 ${
                  errors.phone ? 'border-rose-500 ring-2 ring-rose-300' : 'border-purple-300'
                } focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner`}
              />
            </div>
            {errors.phone && <p className="text-xs font-bold text-rose-300">{errors.phone}</p>}
          </div>

          {/* WhatsApp Number */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Number (Optional)</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="w-full bg-white/95 border-2 border-purple-300 focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Email Address</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full bg-white/95 border-2 ${
                  errors.email ? 'border-rose-500 ring-2 ring-rose-300' : 'border-purple-300'
                } focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner`}
              />
            </div>
            {errors.email && <p className="text-xs font-bold text-rose-300">{errors.email}</p>}
          </div>

          {/* Event Type */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Event Type *</span>
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className={`w-full bg-white/95 border-2 ${
                errors.eventType ? 'border-rose-500 ring-2 ring-rose-300' : 'border-purple-300'
              } focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner ${
                formData.eventType === '' ? 'text-gray-500 font-normal' : 'text-[#000000]'
              }`}
            >
              <option value="" disabled className="text-gray-500 font-normal">Select Event Type...</option>
              <option value="Wedding" className="text-[#000000] font-bold">Wedding Photography</option>
              <option value="Pre-Wedding" className="text-[#000000] font-bold">Pre-Wedding Shoot</option>
              <option value="Engagement" className="text-[#000000] font-bold">Engagement Ceremony</option>
              <option value="Birthday" className="text-[#000000] font-bold">Birthday Celebration</option>
              <option value="Corporate" className="text-[#000000] font-bold">Corporate Event</option>
              <option value="Portrait" className="text-[#000000] font-bold">Portrait Session</option>
              <option value="Other" className="text-[#000000] font-bold">Other Event</option>
            </select>
            {errors.eventType && <p className="text-xs font-bold text-rose-300">{errors.eventType}</p>}
          </div>

          {/* Event Date */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Event Date *</span>
            </label>
            <div className="relative">
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className={`w-full bg-white/95 border-2 ${
                  errors.eventDate ? 'border-rose-500 ring-2 ring-rose-300' : 'border-purple-300'
                } focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner`}
              />
            </div>
            {errors.eventDate && <p className="text-xs font-bold text-rose-300">{errors.eventDate}</p>}
          </div>

          {/* Event Location */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Event Location (City/Venue) *</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City or venue name..."
                className={`w-full bg-white/95 border-2 ${
                  errors.location ? 'border-rose-500 ring-2 ring-rose-300' : 'border-purple-300'
                } focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner`}
              />
            </div>
            {errors.location && <p className="text-xs font-bold text-rose-300">{errors.location}</p>}
          </div>

          {/* Preferred Package */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Preferred Package</span>
            </label>
            <select
              name="preferredPackage"
              value={formData.preferredPackage}
              onChange={handleChange}
              className={`w-full bg-white/95 border-2 border-purple-300 focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner ${
                formData.preferredPackage === '' ? 'text-gray-500 font-normal' : 'text-[#000000]'
              }`}
            >
              <option value="" disabled className="text-gray-500 font-normal">Select Preferred Package...</option>
              <option value="Essential" className="text-[#000000] font-bold">Essential Package</option>
              <option value="Signature" className="text-[#000000] font-bold">Signature Package (Most Popular)</option>
              <option value="Luxury" className="text-[#000000] font-bold">Luxury Custom Package</option>
              <option value="Custom" className="text-[#000000] font-bold">Need Custom Quote</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider !text-[#C4B5FD] font-extrabold flex items-center space-x-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#C084FC]" />
            <span>Message & Requirements</span>
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your celebration details..."
            className="w-full bg-white/95 border-2 border-purple-300 focus:border-[#C084FC] focus:ring-4 focus:ring-purple-400/40 text-[#000000] font-sans font-bold text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 focus:outline-none transition-all duration-300 shadow-inner"
          />
        </div>

        {/* Checkbox */}
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-5 h-5 rounded border-purple-300 text-purple-600 focus:ring-purple-500 accent-purple-600 cursor-pointer"
            />
            <span className="text-xs sm:text-sm !text-[#C4B5FD] font-sans font-bold">
              I agree to be contacted regarding date availability and proposal details.
            </span>
          </label>
          {errors.agree && <p className="text-xs font-bold text-rose-300">{errors.agree}</p>}
        </div>

        {/* Submit Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:flex-1 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-sans font-black uppercase tracking-[0.25em] text-xs sm:text-sm rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-3 border-2 border-white cursor-pointer"
          >
            {isSubmitting ? (
              <span>Checking Availability...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Check Date Availability</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppRedirect}
            className="w-full sm:w-auto px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-black uppercase tracking-[0.25em] text-xs sm:text-sm rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 border-2 border-white cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current text-white" />
            <span>Send via WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
};
