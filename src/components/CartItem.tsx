import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { QuantitySelector } from './QuantitySelector';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: any;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const price = item.discount ? item.price * (1 - item.discount / 100) : item.price;

  return (
    <div className="flex gap-4 py-6 border-b border-slate-100 last:border-0">
      <Link to={`/product/${item.id}`} className="w-24 h-32 rounded-xl overflow-hidden shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </Link>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between mb-1">
          <Link to={`/product/${item.id}`}>
            <h4 className="font-display font-bold text-slate-800 hover:text-primary-600 transition-colors">{item.name}</h4>
          </Link>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-slate-400 hover:text-rose-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
        
        <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">{item.category}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <QuantitySelector 
            quantity={item.quantity} 
            onChange={(q) => updateQuantity(item.id, q)} 
          />
          <div className="text-right">
            <p className="font-bold text-slate-900">${(price * item.quantity).toFixed(2)}</p>
            {item.quantity > 1 && (
              <p className="text-xs text-slate-400">${price.toFixed(2)} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
