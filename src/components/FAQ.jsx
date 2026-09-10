import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ShinyText from './reactbits/ShinyText.jsx';
import { faqData } from '../data/faq.js';

export default function FAQ() {
  // Allow toggling open item or multiple items (e.g. tracking open set or single index)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-3">
            <ShinyText
              text="FAQ"
              color="#506B5B"
              shineColor="#DDE4DB"
              speed={4}
              spread={120}
              className="text-xs font-semibold uppercase tracking-widest"
            />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] leading-tight">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-base text-[#6E756F]">
            Everything you need to know about preparing for your first appointment and starting rehabilitation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-2xl border border-[#DDE4DB] overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-[#506B5B] cursor-pointer"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#26332C] pr-4">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center shrink-0 text-[#506B5B] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#DDE4DB]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-base text-[#6E756F] leading-relaxed border-t border-[#DDE4DB]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
