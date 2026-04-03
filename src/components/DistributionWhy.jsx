import React, { useEffect } from "react";
import {
  FaTruck,
  FaBoxes,
  FaShieldAlt,
  FaClock,
  FaNetworkWired,
} from "react-icons/fa";

const data = [
  {
    icon: <FaNetworkWired />,
    text: "Reliable and structured supply chain",
  },
  {
    icon: <FaBoxes />,
    text: "Efficient inventory and order management",
  },
  {
    icon: <FaShieldAlt />,
    text: "Safe and secure packaging standards",
  },
  {
    icon: <FaClock />,
    text: "Timely delivery to clients and partners",
  },
  {
    icon: <FaTruck />,
    text: "Strong coordination with logistics providers",
  },
];

function DistributionWhy() {

  useEffect(() => {
    const items = document.querySelectorAll(".dist-why-item");

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
    <div
      className="py-5 mb-2"
      style={{
        background: "#F5F2EB",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div className="container text-center">

        <h2
          className="fw-bold mb-5"
          style={{ color: "#1A1A1A" }}
        >
          Why Our Distribution System Stands Out
        </h2>

        <div className="row justify-content-center">

          {data.map((item, i) => (
            <div
              key={i}
              className="col-md-4 col-10 mb-4 dist-why-item"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: `0.5s ease ${i * 0.1}s`,
              }}
            >

              <div
                className="p-4 text-center"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                }}
              >

                <div
                  style={{
                    position: "absolute",
                    width: "120px",
                    height: "120px",
                    background: "rgba(200,169,106,0.15)",
                    borderRadius: "50%",
                    top: "-40px",
                    right: "-40px",
                  }}
                ></div>

               <div
                  style={{
                    fontSize: "30px",
                    color: "#C8A96A",
                    marginBottom: "10px",
                    animation: "pulse 2s infinite",
                  }}
                >
                  {item.icon}
                </div>

                <p style={{ color: "#333", fontWeight: "500" }}>
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      <style>
        {`
          .dist-why-item.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .dist-why-item div:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>

    </div>
  );
}

export default DistributionWhy;