import React, { useEffect } from "react";

const steps = [
  {
    title: "Inventory Management",
    desc: "We maintain organized inventory systems to track product availability and manage stock efficiently.",
  },
  {
    title: "Order Processing",
    desc: "Our team ensures quick and accurate processing of orders to meet buyer requirements and timelines.",
  },
  {
    title: "Secure Packaging",
    desc: "All products are carefully packed to protect garment quality during transportation.",
  },
  {
    title: "Logistics & Delivery",
    desc: "We work with reliable logistics partners to ensure safe and timely delivery to distributors, retailers, and buyers.",
  },
];

function DistributionProcess() {

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

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
    <div className="py-5 mt-2 mb-2" style={{ background: "#F5F2EB" }}>

      <div className="container">

        <h2
          className="text-center fw-bold mb-5"
          style={{ color: "#1A1A1A" }}
        >
          Our Distribution Process
        </h2>

        <div style={{ position: "relative" }}>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: "4px",
              height: "100%",
              background: "#C8A96A",
              transform: "translateX(-50%)",
            }}
          ></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`timeline-item d-flex align-items-center mb-5 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              style={{
                opacity: 0,
                transform: "translateY(50px)",
                transition: "0.6s ease",
              }}
            >

              <div className="col-md-5">

                <div
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    padding: "25px",
                    borderRadius: "14px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                  }}
                  className="process-box"
                >
                  <h5 className="fw-bold" style={{ color: "#1A1A1A" }}>
                    {step.title}
                  </h5>

                  <p style={{ color: "#333", marginTop: "10px" }}>
                    {step.desc}
                  </p>
                </div>

              </div>

              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background: "#C8A96A",
                  borderRadius: "50%",
                  margin: "0 20px",
                  zIndex: 2,
                }}
              ></div>

              <div className="col-md-5"></div>

            </div>
          ))}

        </div>

      </div>

      <style>
        {`
          .timeline-item.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .process-box:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          }

          @media(max-width:768px){
            .timeline-item {
              flex-direction: column !important;
              text-align: center;
            }

            .timeline-item .col-md-5 {
              width: 100%;
            }
          }
        `}
      </style>

    </div>
  );
}

export default DistributionProcess;