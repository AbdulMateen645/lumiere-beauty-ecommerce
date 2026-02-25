import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { RatingStars } from '../components/RatingStars';
import { QuantitySelector } from '../components/QuantitySelector';
import { ProductCard } from '../components/ProductCard';
import { Heart, ShoppingBag, Share2, ShieldCheck, Truck, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  if (!product) return null;

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-12">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-primary-600 transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-slate-600 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-[24px] md:rounded-[40px] overflow-hidden bg-white shadow-sm relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                {product.isNew && (
                  <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">New</span>
                )}
                {product.discount && (
                  <span className="bg-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">-{product.discount}%</span>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[
                product.image,
                "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
                "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
                "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
              ].map((imgUrl, i) => (
                <button key={i} className={cn(
                  "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                  i === 0 ? "border-primary-600" : "border-transparent hover:border-primary-200"
                )}>
                  <img 
                    src={imgUrl} 
                    alt={`Thumbnail ${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-6 mb-8">
                <RatingStars rating={product.rating} reviews={product.reviews} className="scale-110 origin-left" />
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-emerald-500 font-bold text-sm flex items-center gap-1">
                  <ShieldCheck size={16} />
                  In Stock ({product.stock})
                </span>
              </div>

              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl font-bold text-slate-900">${discountedPrice.toFixed(2)}</span>
                {product.discount && (
                  <span className="text-2xl text-slate-300 line-through">${product.price.toFixed(2)}</span>
                )}
              </div>

              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                {product.description}
              </p>
            </div>

            <div className="space-y-8 mt-auto">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quantity</span>
                  <QuantitySelector quantity={quantity} onChange={setQuantity} className="h-14 px-2" />
                </div>
                
                <div className="flex-1 flex gap-4">
                  <button 
                    onClick={() => addToCart(product, quantity)}
                    className="flex-1 bg-primary-600 text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all"
                  >
                    <ShoppingBag size={20} />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className={cn(
                      "w-14 h-14 rounded-2xl border flex items-center justify-center transition-all",
                      isInWishlist(product.id) ? "bg-rose-50 border-rose-100 text-rose-500" : "bg-white border-slate-200 text-slate-400 hover:border-primary-300 hover:text-primary-600"
                    )}
                  >
                    <Heart size={24} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                {[
                  { icon: Truck, label: 'Free Delivery', sub: 'Orders over $100' },
                  { icon: RefreshCw, label: 'Easy Returns', sub: '30-day window' },
                  { icon: Share2, label: 'Share Product', sub: 'Spread the glow' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-beige-100 flex items-center justify-center text-slate-600">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.label}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-24">
          <div className="flex border-b border-slate-100 mb-10">
            {['description', 'ingredients', 'reviews'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all relative",
                  activeTab === tab ? "text-primary-600" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div 
                  key="desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-4xl"
                >
                  <h3 className="text-2xl font-bold mb-6">Product Details</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    Our {product.name} is meticulously formulated to provide the best possible results for your skin. 
                    Whether you're looking to hydrate, brighten, or protect, this {product.category.toLowerCase()} essential 
                    is designed to fit seamlessly into your existing routine.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Dermatologist tested',
                      'Paraben-free & Vegan',
                      'Suitable for all skin types',
                      'Sustainable packaging',
                      'Made with natural botanicals',
                      'No synthetic fragrances'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'ingredients' && (
                <motion.div 
                  key="ing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Key Ingredients</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {product.ingredients.map((ing, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-primary-600 mb-2">{ing}</h4>
                        <p className="text-sm text-slate-500">Known for its powerful properties that help maintain skin health and vitality.</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div 
                  key="rev"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-64 shrink-0">
                      <div className="p-8 rounded-[32px] bg-primary-50 text-center">
                        <p className="text-5xl font-bold text-primary-600 mb-2">{product.rating}</p>
                        <RatingStars rating={product.rating} className="justify-center mb-4" />
                        <p className="text-sm text-slate-500">Based on {product.reviews} reviews</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-8">
                      {[
                        { name: 'Alice M.', date: '2 weeks ago', rating: 5, content: 'Absolutely love this! My skin has never looked better.' },
                        { name: 'James K.', date: '1 month ago', rating: 4, content: 'Great product, but the packaging could be improved.' },
                      ].map((rev, i) => (
                        <div key={i} className="pb-8 border-b border-slate-100 last:border-0">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h4 className="font-bold text-slate-900">{rev.name}</h4>
                              <p className="text-xs text-slate-400">{rev.date}</p>
                            </div>
                            <RatingStars rating={rev.rating} />
                          </div>
                          <p className="text-slate-500">{rev.content}</p>
                        </div>
                      ))}
                      <button className="text-primary-600 font-bold hover:underline">Load More Reviews</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
