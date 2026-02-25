import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryCardProps {
  name: string;
  image: string;
  count?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, count }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative h-80 rounded-3xl overflow-hidden shadow-sm"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8">
        <h3 className="font-display text-2xl font-bold text-white mb-1">{name}</h3>
        {count !== undefined && <p className="text-white/80 text-sm mb-4">{count} Products</p>}
        <Link 
          to="/shop" 
          className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all"
        >
          <span>Explore Now</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
};
