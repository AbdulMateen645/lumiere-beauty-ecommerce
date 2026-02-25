import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 mb-24 md:mb-32">
          <div className="lg:w-1/2">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">Crafting Beauty <br /> with <span className="text-primary-500 italic">Intention</span></h1>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-10">
              Founded in 2020, Lumière Beauty was born out of a simple belief: that skincare should be a ritual of self-love, not just a routine. We combine ancient botanical wisdom with modern dermatological science to create products that deliver visible results without compromise.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">100%</p>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Organic Ingredients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">50k+</p>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Happy Glowers</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000" 
                alt="About Lumiere" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-100 rounded-[40px] -z-10"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-beige-200 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white rounded-[40px] md:rounded-[60px] px-8 md:px-12 lg:px-20 mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-slate-500">Everything we do is guided by our commitment to your skin and our planet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly packaging and ethically sourced ingredients.' },
              { icon: ShieldCheck, title: 'Transparency', desc: 'Full ingredient disclosure and honest claims.' },
              { icon: Heart, title: 'Inclusivity', desc: 'Formulas designed for every skin type and tone.' },
              { icon: Sparkles, title: 'Innovation', desc: 'Constant research to bring you the latest in clean beauty.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-3xl bg-primary-50 flex items-center justify-center text-primary-600 mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">A Note from Our Founder</h2>
            <p className="text-lg text-slate-500 italic leading-relaxed mb-8">
              "I started Lumière because I couldn't find products that were both clean and effective. I wanted to create a brand that people could trust implicitly—where every bottle represents a promise of quality and care."
            </p>
            <div>
              <p className="font-display text-2xl font-bold text-slate-900">Abdul Mateen Hashmi</p>
              <p className="text-primary-600 font-bold uppercase tracking-widest text-xs">Founder & CEO</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-xl">
              <img 
                src="/founder.png" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
