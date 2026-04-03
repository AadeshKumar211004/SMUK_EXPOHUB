import React, { useState } from "react";

const faqData = [
  {
    question: "What services do you provide?",
    answer: "We offer manufacturing, sourcing, logistics, design, and consulting services tailored to your needs.",
  },
  {
    question: "How can I contact your team?",
    answer: "You can reach us through our contact form or directly via phone and email.",
  },
  {
    question: "Do you provide customized solutions?",
    answer: "Yes, we provide fully customized solutions based on your business requirements.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work across fashion, retail, and pet-related industries.",
  },
  {
    question: "How do you ensure product quality?",
    answer: "We follow strict quality control processes with trusted partners.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="faq" className="faq-section py-5 mt-2">
      <div className="container">

        <h2 className="faq-heading text-center mb-5">
          Frequently Asked Questions
        </h2>

        <div className="faq-container">

          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >

              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h5>{item.question}</h5>

                <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>
                  ▼
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default FAQ;