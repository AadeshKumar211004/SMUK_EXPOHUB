import React, { useEffect } from "react";
import {
  FaIndustry,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const data = [
  { icon: <FaIndustry />, text: "Strong knowledge of the apparel industry" },
  { icon: <FaChartLine />, text: "Practical and results-driven strategies" },
  { icon: <FaCogs />, text: "Guidance for manufacturing and sourcing" },
  { icon: <FaRocket />, text: "Focus on efficiency and business growth" },
  { icon: <FaUsers />, text: "Professional support for emerging and established brands" },
];

function ConsultingWhy() {

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
    <div className="py-5" style={{ background: "#F5F2EB" }}>

      <div className="container">

        <h2 className="fw-bold text-center mb-5" style={{ color: "#1A1A1A" }}>
          Why Choose Our Consulting
        </h2>

        <div className="row align-items-center flex-column-reverse flex-md-row">

          <div className="col-md-5">

            {data.map((item, i) => (
              <div
                key={i}
                className="fade-item d-flex align-items-start mb-2 why-card"
                style={{
                  opacity: 0,
                  transform: "translateX(-40px)",
                  transition: `0.6s ease ${i * 0.1}s`,
                }}
              >

                <div
                  style={{
                    fontSize: "20px",
                    color: "#C8A96A",
                    marginRight: "5px",
                    minWidth: "35px",
                    animation: "iconFloat 3s infinite ease-in-out",
                  }}
                >
                  {item.icon}
                </div>

                <div
                  className="text-box"
                  style={{
                    background: "#fff",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    width: "100%",
                    transition: "0.4s",
                    fontSize: "17px",
                  }}
                >
                  {item.text}
                </div>

              </div>
            ))}

          </div>

          <div
            className="col-md-7 mb-4 mb-md-0 fade-item"
            style={{
              opacity: 0,
              transform: "translateX(40px)",
              transition: "0.6s ease",
            }}
          >

            <div className="image-stack">

              <img src="/consulting/photo1.jpeg" className="img1" alt="" />
              <img src="/consulting/photo2.jpeg" className="img2" alt="" />
              <img src="/consulting/photo9.jpeg" className="img3" alt="" />
              <img src="/consulting/photo6.jpeg" className="img4" alt="" />

            </div>

          </div>

        </div>

      </div>

      <style>
        {`
          .fade-item.show {
            opacity: 1 !important;
            transform: translate(0,0) !important;
          }

          .why-card:hover .text-box {
            transform: translateX(6px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          }

          @keyframes iconFloat {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }

          /* 🔥 FIXED IMAGE STACK */
          .image-stack {
            position: relative;
            height: 400px;
            overflow: hidden; /* ✅ FIX */
          }

          .image-stack img {
            position: absolute;
            width: 65%;
            border-radius: 14px;
            transition: 0.4s ease;
            will-change: transform; /* ✅ smooth */
          }

          .img1 {
            top: 20%;
            left: 0;
            animation: float1 6s infinite ease-in-out;
          }

          .img2 {
            top: 0;
            right: 0;
            animation: float2 7s infinite ease-in-out;
          }

          .img3 {
            bottom: 0;
            left: 20%;
            animation: float3 8s infinite ease-in-out;
          }

          .img4 {
            top: 10%;
            left: 30%;
            animation: float2 9s infinite ease-in-out;
          }

          .image-stack img:hover {
            transform: scale(1.05) rotate(1deg);
            z-index: 2;
          }

          /* 🔥 SAFE ANIMATIONS */
          @keyframes float1 {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          @keyframes float2 {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }

          @keyframes float3 {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          /* 📱 MOBILE FIX */
          @media(max-width:768px){

            .image-stack {
              height: 260px;
              overflow: hidden;
              margin-bottom: 20px;
            }

            .image-stack img {
              width: 75%;
            }

            .text-box {
              font-size: 13px;
              padding: 10px 14px;
            }

          }
        `}
      </style>

    </div>
  );
}

export default ConsultingWhy;