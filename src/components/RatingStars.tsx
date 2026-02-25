import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviews?: number;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating, reviews, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex text-amber-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
        {hasHalfStar && <StarHalf size={14} fill="currentColor" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars} size={14} className="text-slate-200" />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-slate-400">({reviews})</span>
      )}
    </div>
  );
};
