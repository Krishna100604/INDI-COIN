import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is INDICOIN?',
      answer: 'INDICOIN is a stablecoin pegged to the Indian Rupee (INR), backed by fiat reserves and designed to offer stability and efficiency for INR-based transactions. It is deployed on polygon platform to ensure security and transparency.'
    },
    {
      question: 'How does INDICOIN maintain a 1:1 peg with the INR?',
      answer: 'INDICOIN maintains its INR peg by backing the stablecoin with sufficient INR reserves. This ensures that each INDICOIN is fully supported by real assets, offering stability to its value.'
    },
    {
      question: 'Is the INDICOIN regulated?',
      answer: 'Yes, the INDICOIN is designed to fully comply with Indian laws and regulations, including KYC, AML, and RBI guidelines.'
    },
    {
      question: 'Is my money safe?',
      answer: 'Your funds are safeguarded through full reserve backing, regular audits, and the use of a reputable custodian.'
    },
    {
      question: 'How can I acquire INDICOIN?',
      answer: 'INDICOIN can be aquired at the CEXs in India, once after the release.'
    },
    {
      question: 'Can I use INDICOIN for international transactions?',
      answer: 'Currently, the INDICOIN is primarily focused on domestic transactions within India.'
    },
    {
      question: 'What are the potential use cases for INR Stablecoins?',
      answer: 'Payments, remittances, trade finance, and financial inclusion.'
    },
    {
      question: 'Are there any risks associated with using INR Stablecoins?',
      answer: 'Like any digital asset, there are inherent risks. However, the INR Stablecoin is designed to minimize these risks through full reserve backing and regulatory compliance.'
    }
  ];

  return (
    <div className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button 
                onClick={() => toggleFAQ(index)} 
                className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-800 rounded-b-lg">
                  <p className="text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
