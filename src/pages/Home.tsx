import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';

export const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Beauty Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige-50 via-beige-50/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Premium Skincare Collection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-slate-900 leading-[0.9] mb-6 md:mb-8">
              Reveal Your <br />
              <span className="text-primary-500 italic">Natural</span> Radiance
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Discover our curated collection of luxury beauty products designed to nourish your skin and elevate your daily ritual.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/shop" 
                className="bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-2 group"
              >
                <span>Shop Collection</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white text-slate-800 px-10 py-5 rounded-2xl font-bold text-lg shadow-sm border border-slate-100 hover:bg-slate-50 transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, title: 'Clean Beauty', desc: '100% organic & non-toxic ingredients' },
              { icon: Truck, title: 'Free Shipping', desc: 'On all orders over $100' },
              { icon: Sparkles, title: 'Cruelty Free', desc: 'Never tested on animals' },
              { icon: Star, title: 'Premium Quality', desc: 'Dermatologist approved formulas' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-3xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-beige-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h2>
              <p className="text-slate-500">Find the perfect products for your specific needs.</p>
            </div>
            <Link to="/shop" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Categories <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard name="Skincare" image="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600&h=800" count={12} />
            <CategoryCard name="Makeup" image="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600&h=800" count={8} />
            <CategoryCard name="Haircare" image="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=600&h=800" count={6} />
            <CategoryCard name="Fragrance" image="https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600&h=800" count={4} />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Best Sellers</h2>
            <p className="text-slate-500">The products our customers can't get enough of. Experience the results for yourself.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative rounded-[24px] md:rounded-[40px] overflow-hidden h-[400px] md:h-[500px] flex items-center">
            <img 
              src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900" 
              alt="Promo" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 px-12 md:px-20 text-white max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Summer Glow <br /> Essentials</h2>
              <p className="text-xl text-white/90 mb-10">Get up to 30% off on our exclusive summer collection. Limited time only!</p>
              <Link 
                to="/shop" 
                className="inline-block bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all"
              >
                Shop the Sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-beige-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">New Arrivals</h2>
              <p className="text-slate-500">Freshly formulated products just for you.</p>
            </div>
            <Link to="/shop" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Shop All New <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Glowers Say</h2>
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah J.', role: 'Verified Buyer', content: 'The Glow Serum has completely transformed my skin. I have never felt more confident without makeup!' },
              { name: 'Elena R.', role: 'Skincare Enthusiast', content: 'Finally, a brand that actually uses clean ingredients that work. The night cream is my holy grail.' },
              { name: 'Michelle W.', role: 'Verified Buyer', content: 'Fast shipping and beautiful packaging. It feels like opening a luxury gift every time I order.' },
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[32px] bg-beige-50 border border-beige-100"
              >
                <p className="text-lg text-slate-700 italic mb-8">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-primary-600 rounded-[24px] md:rounded-[40px] p-8 md:p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Glow Club</h2>
              <p className="text-white/80 mb-10 text-lg">Subscribe to our newsletter and receive 15% off your first order, plus exclusive access to new launches.</p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <button className="bg-white text-primary-600 px-10 py-4 rounded-2xl font-bold hover:bg-beige-50 transition-all">
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-xs text-white/40">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
