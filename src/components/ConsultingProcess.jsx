import React, { useEffect } from "react";

const data = [
  {
    title: "Apparel Manufacturing Consultation",
    desc: "We provide expert advice on production planning, manufacturing processes, and quality standards to ensure efficient and reliable garment production.",
  },
  {
    title: "Sourcing Strategy",
    desc: "Our team helps businesses identify reliable suppliers and optimize sourcing strategies for better cost efficiency and product quality.",
  },
  {
    title: "Supply Chain Optimization",
    desc: "We assist in streamlining supply chain operations to improve delivery timelines and operational performance.",
  },
  {
    title: "Market & Product Insights",
    desc: "We share valuable insights about market trends, product demand, and fashion industry developments to help businesses stay ahead of the competition.",
  },
];

function ConsultingOffer() {

  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, i * 150);
        }
      });
    }, { threshold: 0.2 });

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="py-5 mt-2 mb-2" style={{ background: "#F5F2EB" }}>

      <div className="container">

        <h2 className="fw-bold text-center mb-5" style={{ color: "#1A1A1A" }}>
          What We Offer
        </h2>

        <div className="row align-items-center">

          <div
            className="col-md-6 mb-4 mb-md-0 fade-up"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              transition: "0.6s ease",
            }}
          >
            <div
              className="img-box"
              style={{
                overflow: "hidden",
                borderRadius: "18px",
                position: "relative",
              }}
            >

              <img
                src="/consulting/photo4.jpeg"
                alt="consulting"
                className="main-img"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  transition: "0.6s",
                }}
              />

              <div
                className="img-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(200,169,106,0.3), transparent)",
                  opacity: 0,
                  transition: "0.4s",
                }}
              ></div>

            </div>
          </div>

          <div className="col-md-6">

            {data.map((item, i) => (
              <div
                key={i}
                className="offer-card fade-up mb-3"
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  transition: "0.4s",
                  opacity: 0,
                  transform: "translateX(40px)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >

                <h5 style={{ color: "#1A1A1A" }}>
                  {item.title}
                </h5>

                <p
                  className="desc"
                  style={{
                    color: "#333",
                    maxHeight: "0px",
                    overflow: "hidden",
                    transition: "0.4s",
                  }}
                >
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      <style>
        {`
          .fade-up.show {
            opacity: 1 !important;
            transform: translate(0,0) !important;
          }

          /* Image hover */
          .img-box:hover .main-img {
            transform: scale(1.1);
          }

          .img-box:hover .img-overlay {
            opacity: 1;
          }

          /* Floating image effect */
          .main-img {
            animation: floatY 6s infinite ease-in-out;
          }

          @keyframes floatY {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          /* Card hover */
          .offer-card:hover {
            background: #1A1A1A;
            transform: translateX(10px);
          }

          .offer-card:hover h5 {
            color: #F5F2EB;
          }

          .offer-card:hover .desc {
            max-height: 200px;
            margin-top: 8px;
            color: #ddd;
          }

          @media(max-width:768px){
            .offer-card:hover {
              transform: scale(1.02);
            }
          }
        `}
      </style>

    </div>
  );
}

export default ConsultingOffer;