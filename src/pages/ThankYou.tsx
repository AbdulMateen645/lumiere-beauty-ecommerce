import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ThankYou: React.FC = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="pt-40 pb-24 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10"
        >
          <CheckCircle size={48} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Thank You for Your Order!</h1>
          <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Your order <span className="font-bold text-slate-900">#LB-{orderNumber}</span> has been placed successfully. 
            We've sent a confirmation email to your inbox with all the details.
          </p>

          <div className="bg-white rounded-[24px] md:rounded-[40px] p-8 md:p-10 shadow-sm border border-slate-100 max-w-lg mx-auto mb-10 md:mb-12">
            <h3 className="font-bold text-slate-900 mb-6">What's Next?</h3>
            <ul className="text-left space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <p className="text-slate-500 text-sm">We'll prepare your items with care and premium packaging.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <p className="text-slate-500 text-sm">You'll receive a tracking number as soon as your order ships.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <p className="text-slate-500 text-sm">Get ready to experience your new radiant glow!</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/shop" 
              className="bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2 group"
            >
              <span>Continue Shopping</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/" 
              className="bg-white text-slate-800 px-10 py-5 rounded-2xl font-bold text-lg shadow-sm border border-slate-100 hover:bg-slate-50 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
