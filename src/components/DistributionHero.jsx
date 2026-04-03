import React, { useEffect, useState } from "react";

function DistributionHero() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div
      className="d-flex align-items-center text-center"
      style={{
        minHeight: "95vh",
        background: "linear-gradient(135deg, #F5F2EB, #f0eadf)",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(200,169,106,0.25), transparent)",
          top: "-50px",
          left: "-50px",
          animation: "float1 12s infinite alternate ease-in-out",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(200,169,106,0.2), transparent)",
          bottom: "-50px",
          right: "-50px",
          animation: "float2 14s infinite alternate ease-in-out",
        }}
      ></div>
      <div className="container position-relative">

        <p
          className="fw-semibold mb-2"
          style={{
            color: "#C8A96A",
            letterSpacing: "3px",
            opacity: show ? 1 : 0,
            fontWeight: "700",
            fontSize: "26px",
            transform: show ? "translateY(0)" : "translateY(20px)",
            transition: "0.6s ease",
          }}
        >
          GLOBAL DISTRIBUTION
        </p>

        <h1
          className="fw-bold mb-3"
          style={{
            color: "#1A1A1A",
            fontSize: "clamp(30px,5vw,70px)",
            opacity: show ? 1 : 0,
            fontWeight:800,
            transform: show ? "translateY(0)" : "translateY(30px)",
            transition: "0.8s ease",
            fontFamily: 'Playfair Display, serif',
          }}
        >
          Efficient Distribution for Seamless Apparel Supply
        </h1>

        <h5
          className="fw-semibold mt-3"
          style={{
            color: "#333",
            opacity: show ? 1 : 0,
            transition: "1s ease",
          }}
        >
          Distribution Network
        </h5>

        <p
          className="mt-3 mx-auto"
          style={{
            maxWidth: "850px",
            color: "#333",
            lineHeight: "1.8",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(20px)",
            transition: "1.2s ease",
          }}
        >
          At Smuk Expohub Pvt Ltd, we ensure that high-quality apparel reaches
          businesses and markets through a well-organized and reliable
          distribution network. Our distribution system is designed to deliver
          garments efficiently, maintaining product quality and timely supply.
        </p>

        <p
          className="mx-auto"
          style={{
            maxWidth: "850px",
            color: "#333",
            lineHeight: "1.8",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(20px)",
            transition: "1.4s ease",
          }}
        >
          With a strong focus on logistics, inventory management, and supply
          chain efficiency, we ensure every order is handled with precision.
          Our goal is to bridge the gap between manufacturing and retail.
        </p>

      </div>

      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0, 0); }
            100% { transform: translate(1200px, 80px); }
          }

          @keyframes float2 {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-1200px, -80px); }
          }
        `}
      </style>

    </div>
  );
}

export default DistributionHero;