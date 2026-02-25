import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What makes Lumière Beauty products different?',
      a: 'Our products are formulated with 100% organic ingredients, dermatologist-tested, and cruelty-free. We combine ancient botanical wisdom with modern science for visible results.'
    },
    {
      q: 'How long does shipping take?',
      a: 'Standard shipping takes 2-5 business days within the US. International orders typically arrive within 7-14 business days. Free shipping on orders over $100.'
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 30-day money-back guarantee. Unopened products in original packaging can be returned for a full refund within 30 days of delivery.'
    },
    {
      q: 'Are your products suitable for sensitive skin?',
      a: 'Yes! All our products are dermatologist-tested and formulated to be gentle on sensitive skin. However, we recommend doing a patch test before full application.'
    },
    {
      q: 'Do you test on animals?',
      a: 'Absolutely not. We are 100% cruelty-free and never test our products on animals. We are certified by leading cruelty-free organizations.'
    },
    {
      q: 'How do I track my order?',
      a: 'Once your order ships, you\'ll receive an email with a tracking number. You can track your package through our website or directly on the carrier\'s site.'
    },
    {
      q: 'Can I change or cancel my order?',
      a: 'Orders can be modified or cancelled within 2 hours of placement. After that, they enter our fulfillment process. Contact us immediately if you need to make changes.'
    },
    {
      q: 'Do you offer international shipping?',
      a: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Check our shipping page for more details.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay for your convenience.'
    },
    {
      q: 'How should I store my products?',
      a: 'Store products in a cool, dry place away from direct sunlight. Keep containers tightly closed when not in use to maintain product integrity.'
    }
  ];

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h1>
          <p className="text-slate-500 text-lg">Find answers to common questions about our products and services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 md:p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-sm md:text-base text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`text-primary-600 shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 p-6 md:p-8 bg-primary-50 rounded-2xl text-center">
          <h3 className="text-lg md:text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">Our customer support team is here to help.</p>
          <a href="/contact" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
