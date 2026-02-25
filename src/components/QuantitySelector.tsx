import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
  className?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onChange, className }) => {
  return (
    <div className={`flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white ${className}`}>
      <button 
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="p-2 hover:bg-slate-50 text-slate-500 transition-colors"
      >
        <Minus size={16} />
      </button>
      <span className="w-10 text-center font-medium text-slate-800">{quantity}</span>
      <button 
        onClick={() => onChange(quantity + 1)}
        className="p-2 hover:bg-slate-50 text-slate-500 transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};
