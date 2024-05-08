import React, { useState } from 'react';
import './FAQs.css';
import { assets } from '../../assets/assets';

const FAQs = () => {
    const faqs = [
        { question: 'Question 1', answer: 'Answer 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { question: 'Question 2', answer: 'Answer 2 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      ];
    
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (

    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq" key={index}>
          <div className="question-container" onClick={() => toggleAnswer(index)}>
            <div>{faq.question}</div>
            <img className="arrow" src={assets.arrow} alt="Arrow" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          {openIndex === index && (
            <div className="answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQs