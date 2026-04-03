import React, { useEffect } from "react";

const steps = [
  {
    title: "Product Selection",
    desc: "Buyers can explore our wide range of apparel collections and select the styles that suit their market needs.",
  },
  {
    title: "Order Placement",
    desc: "Once the products are finalized, our team assists in placing the order with clear specifications, quantities, and delivery timelines.",
  },
  {
    title: "Quality Assurance",
    desc: "Each product undergoes strict quality control checks to ensure it meets international standards.",
  },
  {
    title: "Packaging & Delivery",
    desc: "Orders are carefully packed and shipped through reliable logistics partners to ensure safe and timely delivery.",
  },
];

function BuyingProcess() {

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
    <div className="buy-process py-5 mb-2">

      <div className="container">

        <h2 className="process-heading text-center mb-5">
          Our Buying Process
        </h2>

        <div className="row">

          {steps.map((step, i) => (
            <div className="col-md-3 mb-4 fade-up" key={i}>

              <div className="process-card">

                <div className="step-number">
                  {i + 1}
                </div>

                <h5>{step.title}</h5>

                <p>{step.desc}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default BuyingProcess;