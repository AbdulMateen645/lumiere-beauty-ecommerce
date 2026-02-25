import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-500">Have a question about our products or your order? We're here to help you glow. Reach out to us anytime.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-slate-500 text-sm mb-4">Our team typically responds within 24 hours.</p>
              <a href="mailto:hello@lumierebeauty.com" className="text-primary-600 font-bold hover:underline">hello@lumierebeauty.com</a>
            </div>

            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-slate-500 text-sm mb-4">Mon-Fri from 9am to 6pm EST.</p>
              <a href="tel:+15551234567" className="text-primary-600 font-bold hover:underline">+1 (555) 123-4567</a>
            </div>

            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-slate-500 text-sm mb-4">Our flagship store in the heart of Glow City.</p>
              <p className="text-slate-800 font-bold">123 Beauty Lane, Glow City, GC 54321</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[40px] p-8 md:p-10 lg:p-16 shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold mb-10">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" placeholder="Jane Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" placeholder="hello@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Product Question</option>
                    <option>Wholesale</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={6} placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center justify-center gap-3 group">
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
