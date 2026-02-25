import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronLeft, CreditCard, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, process payment here
    clearCart();
    navigate('/thank-you');
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link to="/cart" className="flex items-center gap-1 hover:text-primary-600 transition-colors">
            <ChevronLeft size={16} />
            <span>Back to Cart</span>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          {/* Form Sections */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Shipping Info */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                  <Truck size={20} />
                </div>
                <h2 className="text-2xl font-bold">Shipping Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">First Name</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Last Name</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Street Address</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">City</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Postal Code</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                </div>
              </div>
            </section>

            {/* Payment Info */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-2xl font-bold">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={cn(
                    "p-6 rounded-2xl border-2 flex items-center gap-4 transition-all",
                    paymentMethod === 'card' ? "border-primary-600 bg-primary-50" : "border-slate-100 bg-white hover:border-primary-200"
                  )}
                >
                  <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", paymentMethod === 'card' ? "border-primary-600" : "border-slate-300")}>
                    {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-primary-600 rounded-full" />}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900">Credit Card</p>
                    <p className="text-xs text-slate-500">Visa, Mastercard, AMEX</p>
                  </div>
                </button>
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={cn(
                    "p-6 rounded-2xl border-2 flex items-center gap-4 transition-all",
                    paymentMethod === 'cod' ? "border-primary-600 bg-primary-50" : "border-slate-100 bg-white hover:border-primary-200"
                  )}
                >
                  <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", paymentMethod === 'cod' ? "border-primary-600" : "border-slate-300")}>
                    {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-primary-600 rounded-full" />}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900">Cash on Delivery</p>
                    <p className="text-xs text-slate-500">Pay when you receive</p>
                  </div>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Card Number</label>
                    <div className="relative">
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-7" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">CVV</label>
                      <input type="text" placeholder="123" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300" />
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-sm border border-slate-100 sticky top-32">
              <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-16 rounded-lg overflow-hidden bg-slate-50 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</p>
                        <p className="text-xs text-slate-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900">${((item.discount ? item.price * (1 - item.discount / 100) : item.price) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-slate-900">Total Amount</span>
                  <span className="text-3xl font-bold text-primary-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Place Order Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 p-6 bg-emerald-50 rounded-2xl flex items-start gap-4">
                <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Your data is encrypted and secure. We never store your full card details on our servers.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
