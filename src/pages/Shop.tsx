import React, { useState, useMemo } from 'react';
import { products, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export const Shop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Skincare', 'Makeup', 'Haircare', 'Fragrance'];

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const price = p.discount ? p.price * (1 - p.discount / 100) : p.price;
        const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
        
        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
        
        if (sortBy === 'price-low') return priceA - priceB;
        if (sortBy === 'price-high') return priceB - priceA;
        if (sortBy === 'rating') return b.rating - a.rating;
        return b.id - a.id; // newest
      });
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Shop All</h1>
          <p className="text-slate-500 max-w-2xl">Explore our full range of premium beauty and skincare products, formulated with the finest ingredients for visible results.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-8 md:mb-12">
          <SearchBar onSearch={setSearchQuery} className="flex-1" />
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "flex items-center gap-2 px-6 py-4 rounded-2xl border transition-all font-medium",
                isFilterOpen ? "bg-primary-600 border-primary-600 text-white" : "bg-white border-slate-200 text-slate-700 hover:border-primary-300"
              )}
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>

            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-2xl px-6 py-4 pr-12 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 cursor-pointer w-full sm:w-48"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.aside 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="lg:w-64 shrink-0 overflow-hidden"
              >
                <div className="space-y-10">
                  {/* Categories */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Categories</h4>
                    <div className="space-y-3">
                      {categories.map(cat => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="category"
                            checked={selectedCategory === cat}
                            onChange={() => setSelectedCategory(cat)}
                            className="w-5 h-5 border-2 border-slate-200 rounded-full checked:border-primary-600 checked:bg-primary-600 transition-all appearance-none"
                          />
                          <span className={cn(
                            "transition-colors",
                            selectedCategory === cat ? "text-primary-600 font-bold" : "text-slate-500 group-hover:text-slate-800"
                          )}>
                            {cat}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Price Range</h4>
                    <div className="space-y-4">
                      <input 
                        type="range" 
                        min="0" 
                        max="200" 
                        step="10"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full accent-primary-600"
                      />
                      <div className="flex justify-between text-sm font-medium text-slate-600">
                        <span>$0</span>
                        <span>Up to ${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Availability</h4>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 border-2 border-slate-200 rounded-lg accent-primary-600" />
                      <span className="text-slate-500">In Stock Only</span>
                    </label>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedCategory('All');
                      setPriceRange([0, 200]);
                    }}
                    className="w-full py-3 text-sm font-bold text-primary-600 border border-primary-100 rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-[40px] border border-slate-100">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                  <SlidersHorizontal size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No products found</h3>
                <p className="text-slate-500 mb-8">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, 200]);
                  }}
                  className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination Mock */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center gap-2">
                {[1, 2, 3].map(page => (
                  <button 
                    key={page}
                    className={cn(
                      "w-12 h-12 rounded-xl font-bold transition-all",
                      page === 1 ? "bg-primary-600 text-white shadow-lg shadow-primary-200" : "bg-white text-slate-600 border border-slate-100 hover:bg-slate-50"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
