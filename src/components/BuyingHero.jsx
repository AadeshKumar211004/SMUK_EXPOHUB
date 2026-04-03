import React, { useEffect, useState } from "react";

function BuyingHero() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div
      className="buy-hero d-flex align-items-center text-center"
      style={{
        minHeight: "95vh",
        background: "#F5F2EB",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div className="buy-glow glow1"></div>
      <div className="buy-glow glow2"></div>

      <div className="container">

        <p
          style={{
            color: "#C8A96A",
            letterSpacing: "2px",
            fontWeight: "700",
            fontSize: "26px",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(20px)",
            transition: "0.6s ease",
          }}
        >
          Connecting Global Buyers With Quality Apparel
        </p>

        <h1
          className="mb-4"
          style={{
            fontSize: "clamp(32px,6vw,90px)",
            fontWeight: "800",
            color: "#1A1A1A",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(30px)",
            transition: "0.8s ease",
            fontFamily: 'Playfair Display, serif',
          }}
        >
          Buying With Us
        </h1>

        <p
          className="mx-auto"
          style={{
            maxWidth: "900px",
            color: "#333",
            lineHeight: "1.8",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(20px)",
            transition: "1s ease",
          }}
        >
          At Smuk Expohub Pvt Ltd, we make apparel sourcing simple, reliable, and
          efficient for businesses around the world. Our buying services are designed
          to help brands, retailers, and wholesalers access high-quality garments at
          competitive prices. With a strong focus on quality, transparency, and timely
          delivery, we ensure that every order meets the expectations of our buyers.

          {/* <br /><br />

          We work closely with trusted manufacturing partners and suppliers to provide
          a wide range of apparel products. From casual wear to premium fashion garments,
          our team ensures that each product goes through proper quality checks before
          reaching our buyers. */}
        </p>

      </div>

      <style>
        {`
          .buy-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(70px);
            opacity: 0.3;
          }

          .glow1 {
            width: 300px;
            height: 300px;
            background: #C8A96A;
            top: -50px;
            left: -50px;
            animation: moveGlow1 10s infinite alternate ease-in-out;
          }

          .glow2 {
            width: 250px;
            height: 350px;
            background: #C8A96A;
            bottom: -50px;
            right: -50px;
            animation: moveGlow2 12s infinite alternate ease-in-out;
          }

          @keyframes moveGlow1 {
            0% { transform: translate(0,0); }
            100% { transform: translate(80px,60px); }
          }

          @keyframes moveGlow2 {
            0% { transform: translate(0,0); }
            100% { transform: translate(-60px,-50px); }
          }

          @media(max-width:768px){
            .buy-hero {
              padding: 40px 0;
            }
          }
        `}
      </style>

    </div>
  );
}

export default BuyingHero;