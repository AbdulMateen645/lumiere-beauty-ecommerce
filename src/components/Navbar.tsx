import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tighter text-primary-600">LUMIÈRE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary-600",
                location.pathname === link.path ? "text-primary-600" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 text-slate-600 hover:text-primary-600 transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          
          <Link to="/login" className="p-2 text-slate-600 hover:text-primary-600 transition-colors">
            <User size={20} />
          </Link>

          <Link to="/wishlist" className="p-2 text-slate-600 hover:text-primary-600 transition-colors relative">
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full border-2 border-white"></span>
            )}
          </Link>

          <Link to="/cart" className="p-2 text-slate-600 hover:text-primary-600 transition-colors relative">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-display text-2xl font-bold text-primary-600">LUMIÈRE</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-xl font-medium text-slate-800 hover:text-primary-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 pt-8 border-t border-slate-100">
                <Link to="/login" className="flex items-center gap-3 text-slate-600 mb-6">
                  <User size={20} />
                  <span>My Account</span>
                </Link>
                <button className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary-200">
                  Shop Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
