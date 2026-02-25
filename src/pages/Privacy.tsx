import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: January 2025</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            { icon: Shield, title: 'Your Data is Safe', desc: 'We use industry-standard encryption' },
            { icon: Lock, title: 'Secure Transactions', desc: 'All payments are encrypted' },
            { icon: Eye, title: 'Transparency', desc: 'We never sell your data' },
            { icon: Database, title: 'Data Control', desc: 'You own your information' }
          ].map((item, i) => (
            <div key={i} className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border border-slate-100">
              <item.icon className="text-primary-600 mb-3 md:mb-4" size={28} />
              <h3 className="font-bold text-base md:text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-slate-600 mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="space-y-2 mb-8">
            <li className="text-slate-600">Name, email address, and contact information</li>
            <li className="text-slate-600">Shipping and billing addresses</li>
            <li className="text-slate-600">Payment information (processed securely by our payment providers)</li>
            <li className="text-slate-600">Order history and preferences</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-slate-600 mb-4">We use the information we collect to:</p>
          <ul className="space-y-2 mb-8">
            <li className="text-slate-600">Process and fulfill your orders</li>
            <li className="text-slate-600">Send order confirmations and shipping updates</li>
            <li className="text-slate-600">Respond to your questions and provide customer support</li>
            <li className="text-slate-600">Send marketing communications (with your consent)</li>
            <li className="text-slate-600">Improve our products and services</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-slate-600 mb-8">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted using SSL technology.</p>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Cookies</h2>
          <p className="text-slate-600 mb-8">We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.</p>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Third-Party Services</h2>
          <p className="text-slate-600 mb-8">We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders. These providers are contractually obligated to keep your information secure.</p>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-slate-600 mb-4">You have the right to:</p>
          <ul className="space-y-2 mb-8">
            <li className="text-slate-600">Access your personal information</li>
            <li className="text-slate-600">Correct inaccurate data</li>
            <li className="text-slate-600">Request deletion of your data</li>
            <li className="text-slate-600">Opt-out of marketing communications</li>
            <li className="text-slate-600">Export your data</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-slate-600">If you have questions about this Privacy Policy or how we handle your data, please contact us at privacy@lumierebeauty.com</p>
        </div>
      </div>
    </div>
  );
};
