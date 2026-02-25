export interface Product {
  id: number;
  name: string;
  category: 'Skincare' | 'Makeup' | 'Haircare' | 'Fragrance';
  price: number;
  discount?: number;
  rating: number;
  reviews: number;
  description: string;
  ingredients: string[];
  image: string;
  stock: number;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Glow Serum with Vitamin C",
    category: "Skincare",
    price: 45,
    discount: 10,
    rating: 4.8,
    reviews: 124,
    description: "A potent Vitamin C serum that brightens skin tone and reduces the appearance of dark spots.",
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Ferulic Acid", "Vitamin E"],
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 50,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Hydrating Rose Water Toner",
    category: "Skincare",
    price: 28,
    rating: 4.6,
    reviews: 89,
    description: "A refreshing toner made with pure rose water to hydrate and soothe sensitive skin.",
    ingredients: ["Rose Water", "Glycerin", "Aloe Vera"],
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 35,
    isNew: true
  },
  {
    id: 3,
    name: "Velvet Matte Lipstick - Rose Blush",
    category: "Makeup",
    price: 22,
    rating: 4.9,
    reviews: 210,
    description: "Long-lasting matte lipstick with a creamy texture that doesn't dry out your lips.",
    ingredients: ["Shea Butter", "Vitamin E", "Jojoba Oil"],
    image: "https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 100,
    isBestSeller: true
  },
  {
    id: 4,
    name: "Argan Oil Hair Mask",
    category: "Haircare",
    price: 35,
    discount: 15,
    rating: 4.7,
    reviews: 156,
    description: "Deep conditioning treatment for dry and damaged hair, enriched with organic argan oil.",
    ingredients: ["Argan Oil", "Keratin", "Coconut Oil"],
    image: "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 40
  },
  {
    id: 5,
    name: "Midnight Jasmine Eau de Parfum",
    category: "Fragrance",
    price: 85,
    rating: 4.5,
    reviews: 67,
    description: "An enchanting floral fragrance with notes of jasmine, vanilla, and sandalwood.",
    ingredients: ["Alcohol Denat", "Fragrance", "Water"],
    image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 20,
    isNew: true
  },
  {
    id: 6,
    name: "Gentle Foaming Cleanser",
    category: "Skincare",
    price: 24,
    rating: 4.8,
    reviews: 312,
    description: "A pH-balanced cleanser that removes impurities without stripping the skin's natural moisture.",
    ingredients: ["Ceramides", "Niacinamide", "Glycerin"],
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 75,
    isBestSeller: true
  },
  {
    id: 7,
    name: "Radiant Foundation - Sand",
    category: "Makeup",
    price: 38,
    rating: 4.4,
    reviews: 145,
    description: "Medium coverage foundation with a dewy finish for a natural, healthy glow.",
    ingredients: ["Hyaluronic Acid", "SPF 15", "Vitamin E"],
    image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 60
  },
  {
    id: 8,
    name: "Detoxifying Clay Mask",
    category: "Skincare",
    price: 32,
    discount: 5,
    rating: 4.7,
    reviews: 198,
    description: "Kaolin clay mask that draws out toxins and minimizes the appearance of pores.",
    ingredients: ["Kaolin Clay", "Activated Charcoal", "Tea Tree Oil"],
    image: "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 45
  },
  {
    id: 9,
    name: "Silk Protein Shampoo",
    category: "Haircare",
    price: 26,
    rating: 4.6,
    reviews: 112,
    description: "Strengthening shampoo that leaves hair feeling silky smooth and manageable.",
    ingredients: ["Silk Protein", "Pro-Vitamin B5", "Aloe Vera"],
    image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 80
  },
  {
    id: 10,
    name: "Citrus Zest Body Mist",
    category: "Fragrance",
    price: 18,
    rating: 4.3,
    reviews: 54,
    description: "A light and refreshing body mist with uplifting citrus notes.",
    ingredients: ["Water", "Fragrance", "Glycerin"],
    image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 120
  },
  {
    id: 11,
    name: "Retinol Night Cream",
    category: "Skincare",
    price: 55,
    rating: 4.9,
    reviews: 245,
    description: "Advanced anti-aging night cream that stimulates collagen production and reduces wrinkles.",
    ingredients: ["Retinol", "Peptides", "Shea Butter"],
    image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 30,
    isBestSeller: true
  },
  {
    id: 12,
    name: "Volume Boost Mascara",
    category: "Makeup",
    price: 19,
    rating: 4.7,
    reviews: 387,
    description: "Ultra-black mascara that provides dramatic volume and length without clumping.",
    ingredients: ["Beeswax", "Carnauba Wax", "Panthenol"],
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 150
  },
  {
    id: 13,
    name: "Scalp Revitalizing Serum",
    category: "Haircare",
    price: 42,
    rating: 4.5,
    reviews: 82,
    description: "A lightweight serum that promotes healthy hair growth and balances scalp oil.",
    ingredients: ["Peppermint Oil", "Biotin", "Rosemary Extract"],
    image: "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 25,
    isNew: true
  },
  {
    id: 14,
    name: "Sandalwood & Musk Candle",
    category: "Fragrance",
    price: 25,
    rating: 4.8,
    reviews: 134,
    description: "Hand-poured soy candle with a warm and grounding aroma.",
    ingredients: ["Soy Wax", "Fragrance Oils", "Cotton Wick"],
    image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 40
  },
  {
    id: 15,
    name: "Hyaluronic Acid Plumping Cream",
    category: "Skincare",
    price: 48,
    discount: 20,
    rating: 4.9,
    reviews: 176,
    description: "Intense hydration cream that plumps the skin and locks in moisture for 24 hours.",
    ingredients: ["Hyaluronic Acid", "Squalane", "Ceramides"],
    image: "https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 55,
    isBestSeller: true
  },
  {
    id: 16,
    name: "Creamy Concealer - Light",
    category: "Makeup",
    price: 24,
    rating: 4.6,
    reviews: 121,
    description: "Full coverage concealer that hides dark circles and blemishes with a natural finish.",
    ingredients: ["Vitamin C", "Caffeine", "Glycerin"],
    image: "https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 90
  },
  {
    id: 17,
    name: "Lavender & Honey Hand Cream",
    category: "Skincare",
    price: 15,
    rating: 4.7,
    reviews: 95,
    description: "Nourishing hand cream that repairs dry skin and leaves a delicate lavender scent.",
    ingredients: ["Honey", "Lavender Oil", "Shea Butter"],
    image: "https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 200
  },
  {
    id: 18,
    name: "Shimmering Body Oil",
    category: "Makeup",
    price: 34,
    rating: 4.4,
    reviews: 68,
    description: "Lightweight body oil with subtle gold shimmer for a sun-kissed glow.",
    ingredients: ["Coconut Oil", "Mica", "Vitamin E"],
    image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 65,
    isNew: true
  },
  {
    id: 19,
    name: "Repairing Hair Oil",
    category: "Haircare",
    price: 29,
    rating: 4.8,
    reviews: 143,
    description: "A blend of natural oils that smooths frizz and adds shine to dull hair.",
    ingredients: ["Jojoba Oil", "Almond Oil", "Vitamin E"],
    image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 70
  },
  {
    id: 20,
    name: "Ocean Breeze Reed Diffuser",
    category: "Fragrance",
    price: 36,
    rating: 4.6,
    reviews: 42,
    description: "Long-lasting reed diffuser that fills your home with a fresh coastal scent.",
    ingredients: ["Fragrance", "Essential Oils"],
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    stock: 30
  }
];
