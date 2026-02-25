import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

export const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="pt-40 pb-24 min-h-[80vh]">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-8 text-rose-200">
            <Heart size={48} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Your wishlist is empty</h1>
          <p className="text-slate-500 mb-10 max-w-md mx-auto">Save your favorite items here to keep track of what you love. Start exploring to fill it up!</p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all"
          >
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">My Wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-8 md:p-12 bg-primary-50 rounded-[24px] md:rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to checkout?</h3>
            <p className="text-slate-500">Move your favorites to the cart and complete your order.</p>
          </div>
          <Link 
            to="/cart" 
            className="bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2 group"
          >
            <span>Go to Cart</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
