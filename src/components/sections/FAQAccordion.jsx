import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/faqData';

export const FAQAccordion = ({ limit }) => {
  const [openId, setOpenId] = useState(1);

  const displayedFaqs = limit ? faqData.slice(0, limit) : faqData;

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {displayedFaqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`border-2 rounded-sm transition-all duration-300 ${
              isOpen
                ? 'bg-purple-50/90 border-purple-600 shadow-lg border-t-4 border-t-purple-700'
                : 'bg-white border-purple-200 hover:border-purple-400 shadow-xs'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(faq.id)}
              className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group"
            >
              <span className={`font-sans text-base sm:text-lg font-semibold tracking-normal pr-4 transition-colors ${
                isOpen ? 'text-purple-900 font-bold' : 'text-[#000000] group-hover:text-purple-700'
              }`}>
                {faq.question}
              </span>
              <span className={`p-2 rounded-full border-2 transition-all duration-300 shrink-0 ${
                isOpen ? 'bg-purple-700 text-white border-purple-700 rotate-180 shadow-md' : 'bg-purple-100 border-purple-300 text-purple-700 group-hover:bg-purple-700 group-hover:text-white'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-3 text-sm sm:text-base text-[#334155] font-normal leading-relaxed border-t border-purple-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
