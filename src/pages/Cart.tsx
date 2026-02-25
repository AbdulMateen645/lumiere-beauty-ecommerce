import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { ShoppingBag, ArrowRight, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

export const Cart: React.FC = () => {
  const { cart, subtotal, tax, shipping, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 min-h-[80vh]">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
            <ShoppingBag size={48} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-slate-500 mb-10 max-w-md mx-auto">Looks like you haven't added any glow to your cart yet. Start exploring our collection to find your perfect match.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link to="/shop" className="flex items-center gap-1 hover:text-primary-600 transition-colors">
            <ChevronLeft size={16} />
            <span>Back to Shop</span>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-sm border border-slate-100 sticky top-32">
              <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-bold text-slate-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-emerald-500 font-bold" : "font-bold text-slate-900"}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                    Add ${(100 - subtotal).toFixed(2)} more for FREE shipping
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-slate-100 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-3xl font-bold text-primary-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                to="/checkout" 
                className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Secure checkout powered by Stripe</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>30-day money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
