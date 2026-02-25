import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { RatingStars } from './RatingStars';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300", className)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
        {product.discount && (
          <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={() => toggleWishlist(product)}
        className={cn(
          "absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-colors duration-200",
          isInWishlist(product.id) ? "text-rose-500" : "text-slate-400 hover:text-rose-500"
        )}
      >
        <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg text-slate-800 leading-tight mb-2 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <RatingStars rating={product.rating} reviews={product.reviews} className="mb-3" />

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-900">${discountedPrice.toFixed(2)}</span>
            {product.discount && (
              <span className="text-sm text-slate-400 line-through">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="p-2.5 rounded-xl bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
