import React, { useEffect, useState } from "react";

function ConsultingHero() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "95vh",
        background: "#F5F2EB",
        position: "relative",
        overflow: "hidden",

      }}
    >

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="container d-flex justify-content-center">

        <div
          style={{
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.6)",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            maxWidth: "750px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            border: "1px solid rgba(200,169,106,0.3)",
          }}
        >

          <p
            style={{
              color: "#C8A96A",
              letterSpacing: "3px",
              fontWeight: "700",
              fontSize: "26px",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "0.6s",
            }}
          >
            STRATEGIC CONSULTING
          </p>

          <h1
            className="fw-bold mt-2"
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(30px,5vw,70px)",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(30px)",
              transition: "0.8s",
              fontFamily: 'Playfair Display, serif',
            }}
          >
            Smart Decisions for Sustainable Growth
          </h1>

          <p
            className="mt-3"
            style={{
              color: "#333",
              lineHeight: "1.8",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "1s",
            }}
          >
            We help businesses make informed decisions related to manufacturing,
            sourcing, supply chain management, and market positioning. Our goal is
            to support businesses in improving efficiency, reducing risks, and
            achieving sustainable growth.
          </p>

        </div>

      </div>

      <style>
        {`
          .blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.4;
          }

          .blob1 {
            width: 300px;
            height: 300px;
            background: #C8A96A;
            top: -50px;
            left: -50px;
            animation: blobMove1 12s infinite alternate ease-in-out;
          }

          .blob2 {
            width: 250px;
            height: 250px;
            background: #C8A96A;
            bottom: -50px;
            right: -50px;
            animation: blobMove2 14s infinite alternate ease-in-out;
          }

          @keyframes blobMove1 {
            0% { transform: translate(0,0); }
            100% { transform: translate(100px,80px); }
          }

          @keyframes blobMove2 {
            0% { transform: translate(0,0); }
            100% { transform: translate(-80px,-60px); }
          }
        `}
      </style>

    </div>
  );
}

export default ConsultingHero;