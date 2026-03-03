import { useState } from 'react';
import faqData from '../data/faq.json';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--active' : ''}`}>
      <button className="faq-item__header" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-item__question">{question}</span>
        <span className="faq-item__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div className="faq-item__content">
        <div className="faq-item__answer">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-header__badge">常見問題</span>
          <h2 className="section-header__title">您想知道的，都在這裡</h2>
          <p className="section-header__desc">
            我們整理了客戶最常詢問的問題。如果您還有其他疑問，歡迎隨時聯繫我們的線上客服。
          </p>
        </div>

        <div className="faq__list">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
