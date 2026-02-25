import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-40 pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[150px] md:text-[200px] font-display font-bold text-primary-50 leading-none select-none">404</h1>
        <div className="-mt-20 md:-mt-28 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-md mx-auto">
            The page you're looking for might have been moved, removed, or never existed. Let's get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2 group"
            >
              <Home size={20} />
              <span>Back to Home</span>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="bg-white text-slate-800 px-10 py-5 rounded-2xl font-bold text-lg shadow-sm border border-slate-100 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
