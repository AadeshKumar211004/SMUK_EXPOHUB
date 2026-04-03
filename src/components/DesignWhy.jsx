import React, { useEffect } from "react";
import {
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaCogs,
  FaStar,
} from "react-icons/fa";

const data = [
  {
    icon: <FaLightbulb />,
    text: "Creative and trend-focused designs",
  },
  {
    icon: <FaChartLine />,
    text: "Strong understanding of the apparel market",
  },
  {
    icon: <FaHandshake />,
    text: "Collaboration with brands and businesses",
  },
  {
    icon: <FaCogs />,
    text: "Attention to detail and garment functionality",
  },
  {
    icon: <FaStar />,
    text: "Commitment to quality and innovation",
  },
];

function DesignWhy() {

  useEffect(() => {
    const items = document.querySelectorAll(".fade-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, i * 120);
        }
      });
    }, { threshold: 0.2 });

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="py-5 mt-2" style={{ background: "#F5F2EB" }}>

      <div className="container">

        <h2 className="fw-bold text-center mb-5" style={{ color: "#1A1A1A" }}>
          Why Our Design Services Stand Out
        </h2>

        <div className="row align-items-center">

          <div
            className="col-md-6 mb-4 mb-md-0 fade-item"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "0.6s ease",
            }}
          >
            <div
              className="image-box"
              style={{
                overflow: "hidden",
                borderRadius: "18px",
                position: "relative",
              }}
            >
              <img
                src="/design/photo5.jpeg"
                alt="design"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  transition: "0.6s",
                }}
                className="main-img"
              />

              <div
                className="img-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(200,169,106,0.3), transparent)",
                  opacity: 0,
                  transition: "0.5s",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-6">

            {data.map((item, i) => (
              <div
                key={i}
                className="fade-item d-flex align-items-start mb-4"
                style={{
                  opacity: 0,
                  transform: "translateX(40px)",
                  transition: `0.6s ease ${i * 0.1}s`,
                }}
              >

                <div
                  style={{
                    fontSize: "22px",
                    color: "#C8A96A",
                    marginRight: "15px",
                    minWidth: "40px",
                    animation: "iconFloat 3s infinite ease-in-out",
                  }}
                >
                  {item.icon}
                </div>

                <div
                  className="feature-box"
                  style={{
                    background: "#fff",
                    padding: "15px 20px",
                    borderRadius: "12px",
                    width: "100%",
                    transition: "0.4s",
                  }}
                >
                  <p style={{ margin: 0, color: "#333" }}>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <style>
        {`
          .fade-item.show {
            opacity: 1 !important;
            transform: translate(0,0) !important;
          }

          /* Image hover */
          .image-box:hover .main-img {
            transform: scale(1.1) rotate(1deg);
          }

          .image-box:hover .img-glow {
            opacity: 1;
          }

          /* Feature hover */
          .feature-box:hover {
            transform: translateX(8px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          }

          /* Icon animation */
          @keyframes iconFloat {
            0% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0); }
          }

          @media(max-width:768px){
            .feature-box:hover {
              transform: scale(1.02);
            }
          }
        `}
      </style>

    </div>
  );
}

export default DesignWhy;