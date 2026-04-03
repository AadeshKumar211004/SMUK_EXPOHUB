import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaTags,
  FaTruck,
  FaShieldAlt,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

const data = [
  {
    icon: <FaCheckCircle />,
    text: "High-quality apparel products",
  },
  {
    icon: <FaTags />,
    text: "Competitive wholesale pricing",
  },
  {
    icon: <FaTruck />,
    text: "Reliable sourcing and supply chain",
  },
  {
    icon: <FaShieldAlt />,
    text: "Strict quality control standards",
  },
  {
    icon: <FaUserTie />,
    text: "Professional support for buyers",
  },
  {
    icon: <FaClock />,
    text: "Timely order processing and delivery",
  },
];

function BuyingWhy() {

  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="buy-why-section py-5 mb-2">

      <div className="container">

        <h2 className="why-heading text-center mb-5">
          Why Buy From Us
        </h2>

        <div className="row">

          {data.map((item, i) => (
            <div className="col-md-4 mb-4 fade-up" key={i}>

              <div className="why-card">

                <div className="why-icon">
                  {item.icon}
                </div>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default BuyingWhy;