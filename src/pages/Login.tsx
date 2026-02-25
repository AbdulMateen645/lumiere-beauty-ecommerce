import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'motion/react';

export const Login: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-[24px] md:rounded-[40px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20">
            <div className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Welcome Back</h1>
              <p className="text-slate-500">Log in to your account to manage your orders and wishlist.</p>
            </div>

            <form className="space-y-6 mb-10">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="email" placeholder="hello@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700">Password</label>
                  <a href="#" className="text-xs font-bold text-primary-600 hover:underline">Forgot Password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 transition-all" />
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center justify-center gap-3 group">
                <span>Sign In</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <button className="flex items-center justify-center gap-3 py-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all">
                <Chrome size={20} />
                <span className="font-bold text-slate-700">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all">
                <Github size={20} />
                <span className="font-bold text-slate-700">GitHub</span>
              </button>
            </div>

            <p className="text-center text-slate-500">
              Don't have an account? <Link to="/register" className="text-primary-600 font-bold hover:underline">Create Account</Link>
            </p>
          </div>

          {/* Image Side */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200" 
              alt="Beauty" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-600/20 backdrop-blur-[2px]"></div>
            <div className="relative z-10 absolute bottom-12 md:bottom-20 left-8 md:left-20 right-8 md:right-20 text-white">
              <h2 className="text-5xl font-bold mb-6 leading-tight">Join our <br /> Glow Community</h2>
              <p className="text-xl text-white/90">Unlock exclusive rewards, early access to new launches, and personalized skin advice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
