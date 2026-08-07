import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { InstagramIcon } from '../components/common/SocialIcons';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';
import { photographerConfig } from '../config/photographerConfig';
import { updateMetaTags } from '../utils/seo';

export const Contact = () => {
  useEffect(() => {
    updateMetaTags(
      "Contact Studio | Arjun Mehra Photography",
      "Get in touch with Arjun Mehra Photography studio. Call, WhatsApp, email, or send an enquiry for your wedding date availability."
    );
  }, []);

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="STUDIO REACH"
        title="Get In Touch"
        description="We would love to hear about your wedding plans, celebration details, and vision."
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-24 bg-studio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            subtitle="CONNECT WITH US"
            title="Let's Talk About Your Event"
            description="Available nationwide in India and internationally for destination weddings."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border-2 border-purple-200 border-t-4 border-t-purple-600 p-8 sm:p-10 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm space-y-6 text-sm shadow-xl animated-border-card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <MapPin className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Studio Address</h4>
                    <p className="font-sans text-base sm:text-lg text-[#000000] font-bold pt-0.5 leading-snug">{photographerConfig.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <Phone className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Phone Dialer</h4>
                    <a href={`tel:${photographerConfig.phone}`} className="font-sans text-base sm:text-lg text-[#000000] hover:text-purple-700 font-bold pt-0.5 block transition-colors">
                      {photographerConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <Mail className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Email Studio</h4>
                    <a href={`mailto:${photographerConfig.email}`} className="font-sans text-base sm:text-lg text-[#000000] hover:text-purple-700 font-bold pt-0.5 block transition-colors">
                      {photographerConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <Clock className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Working Hours</h4>
                    <p className="font-sans text-base sm:text-lg text-[#000000] font-bold pt-0.5">{photographerConfig.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <InstagramIcon className="w-5 h-5 !text-white" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Instagram Handle</h4>
                    <a href={photographerConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-base sm:text-lg text-purple-700 hover:text-purple-900 font-extrabold pt-0.5 block hover:underline transition-colors">
                      {photographerConfig.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 space-y-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
