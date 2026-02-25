import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-6">
            <span className="font-display text-3xl font-bold tracking-tighter text-primary-600">LUMIÈRE</span>
          </Link>
          <p className="text-slate-500 leading-relaxed mb-8">
            Premium skincare and beauty products crafted with natural ingredients for your radiant glow.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-beige-50 flex items-center justify-center text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/shop" className="text-slate-500 hover:text-primary-600 transition-colors">Shop All</Link></li>
            <li><Link to="/shop" className="text-slate-500 hover:text-primary-600 transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop" className="text-slate-500 hover:text-primary-600 transition-colors">Best Sellers</Link></li>
            <li><Link to="/about" className="text-slate-500 hover:text-primary-600 transition-colors">Our Story</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Customer Care</h4>
          <ul className="space-y-4">
            <li><Link to="/shipping" className="text-slate-500 hover:text-primary-600 transition-colors">Shipping Policy</Link></li>
            <li><Link to="/returns" className="text-slate-500 hover:text-primary-600 transition-colors">Returns & Exchanges</Link></li>
            <li><Link to="/faq" className="text-slate-500 hover:text-primary-600 transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="text-slate-500 hover:text-primary-600 transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="text-slate-500 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-500">
              <MapPin size={20} className="text-primary-400 shrink-0" />
              <span>123 Beauty Lane, Glow City, GC 54321</span>
            </li>
            <li className="flex gap-3 text-slate-500">
              <Phone size={20} className="text-primary-400 shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex gap-3 text-slate-500">
              <Mail size={20} className="text-primary-400 shrink-0" />
              <span>hello@lumierebeauty.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">© 2026 Lumière Beauty. All rights reserved.</p>
        <div className="flex gap-6 items-center">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visa.svg" alt="Visa" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mastercard.svg" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
    </footer>
  );
};
