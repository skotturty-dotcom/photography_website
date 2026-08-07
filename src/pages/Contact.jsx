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
              <div className="bg-white border-2 border-studio-border border-t-4 border-t-studio-gold p-8 rounded-sm space-y-6 text-sm shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Studio Address</h4>
                    <p className="font-body text-sm sm:text-base text-studio-text font-semibold pt-1">{photographerConfig.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Phone Dialer</h4>
                    <a href={`tel:${photographerConfig.phone}`} className="font-body text-sm sm:text-base text-studio-text hover:text-studio-gold font-semibold pt-1 block">
                      {photographerConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Email Studio</h4>
                    <a href={`mailto:${photographerConfig.email}`} className="font-body text-sm sm:text-base text-studio-text hover:text-studio-gold font-semibold pt-1 block">
                      {photographerConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Working Hours</h4>
                    <p className="font-body text-sm sm:text-base text-studio-text font-semibold pt-1">{photographerConfig.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Instagram Handle</h4>
                    <a href={photographerConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-body text-sm sm:text-base text-studio-gold hover:underline font-semibold pt-1 block">
                      {photographerConfig.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-studio-border p-8 rounded-sm shadow-md space-y-6">
                <h3 className="font-heading text-3xl text-studio-text font-normal">Send An Enquiry</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
