import React from 'react';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

export const Shipping: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Shipping Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: January 2025</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
            { icon: Clock, title: '2-5 Business Days', desc: 'Standard delivery time' },
            { icon: MapPin, title: 'Worldwide', desc: 'We ship globally' },
            { icon: Package, title: 'Secure Packaging', desc: 'Premium protection' }
          ].map((item, i) => (
            <div key={i} className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border border-slate-100">
              <item.icon className="text-primary-600 mb-3 md:mb-4" size={28} />
              <h3 className="font-bold text-base md:text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold mb-4">Shipping Rates</h2>
          <p className="text-slate-600 mb-6">We offer competitive shipping rates based on your location and order value.</p>
          <ul className="space-y-3 mb-8">
            <li className="text-slate-600">Orders over $100: <strong>FREE shipping</strong></li>
            <li className="text-slate-600">Orders under $100: <strong>$5.99 flat rate</strong></li>
            <li className="text-slate-600">Express shipping: <strong>$15.99</strong> (1-2 business days)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
          <p className="text-slate-600 mb-8">Orders are processed within 1-2 business days. You will receive a tracking number once your order ships.</p>

          <h2 className="text-2xl font-bold mb-4">International Shipping</h2>
          <p className="text-slate-600 mb-4">We ship to most countries worldwide. International shipping times vary by location:</p>
          <ul className="space-y-2 mb-8">
            <li className="text-slate-600">Canada: 5-7 business days</li>
            <li className="text-slate-600">Europe: 7-10 business days</li>
            <li className="text-slate-600">Asia/Pacific: 10-14 business days</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
          <p className="text-slate-600">Once your order ships, you'll receive an email with tracking information. You can track your package anytime through our website or the carrier's website.</p>
        </div>
      </div>
    </div>
  );
};
