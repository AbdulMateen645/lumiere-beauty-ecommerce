import React from 'react';
import { RefreshCw, CheckCircle, XCircle, Clock } from 'lucide-react';

export const Returns: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Returns & Exchanges</h1>
        <p className="text-slate-500 mb-12">We want you to love your purchase. If you're not satisfied, we're here to help.</p>

        <div className="bg-primary-50 border border-primary-100 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-bold text-primary-600 mb-3 md:mb-4">30-Day Money Back Guarantee</h3>
          <p className="text-slate-700">Not happy with your purchase? Return it within 30 days for a full refund or exchange.</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Return Policy</h2>
          <p className="text-slate-600 mb-6">You have 30 days from the date of delivery to return your items.</p>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="text-emerald-500" size={24} />
            Eligible for Return
          </h3>
          <ul className="space-y-2 mb-8">
            <li className="text-slate-600">Unopened products in original packaging</li>
            <li className="text-slate-600">Items with proof of purchase</li>
            <li className="text-slate-600">Products returned within 30 days</li>
          </ul>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <XCircle className="text-rose-500" size={24} />
            Not Eligible for Return
          </h3>
          <ul className="space-y-2 mb-8">
            <li className="text-slate-600">Opened or used products (for hygiene reasons)</li>
            <li className="text-slate-600">Items without original packaging</li>
            <li className="text-slate-600">Sale or clearance items</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mb-4">How to Return</h2>
          <ol className="space-y-4 mb-8">
            <li className="text-slate-600"><strong>1. Contact Us:</strong> Email us at returns@lumierebeauty.com with your order number</li>
            <li className="text-slate-600"><strong>2. Get Authorization:</strong> We'll send you a return authorization and shipping label</li>
            <li className="text-slate-600"><strong>3. Pack & Ship:</strong> Securely pack your items and ship them back</li>
            <li className="text-slate-600"><strong>4. Receive Refund:</strong> Once we receive your return, we'll process your refund within 5-7 business days</li>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Exchanges</h2>
          <p className="text-slate-600 mb-4">Want to exchange for a different product? Contact us and we'll help you find the perfect replacement.</p>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Refund Method</h2>
          <p className="text-slate-600">Refunds will be issued to your original payment method. Please allow 5-10 business days for the refund to appear in your account.</p>
        </div>
      </div>
    </div>
  );
};
