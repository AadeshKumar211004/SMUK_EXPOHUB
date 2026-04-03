import React, { useEffect, useState } from "react";

function DesignHero() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div
      className="d-flex mb-2 align-items-center"
      style={{
        minHeight: "95vh",
        background: "linear-gradient(135deg, #F5F2EB, #efe7db)",
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

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">

            <p
              className="fw-semibold"
              style={{
                color: "#C8A96A",
                letterSpacing: "3px",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(20px)",
                transition: "0.6s ease",
                fontWeight: "700",
                fontSize: "26px",
              }}
            >
              DESIGN & INNOVATION
            </p>

            <h1
              className="fw-bold mt-2"
              style={{
                color: "#1A1A1A",
                fontSize: "clamp(30px,5vw,50px)",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(30px)",
                transition: "0.8s ease",
                fontFamily: 'Playfair Display, serif',
              }}
            >
              Transforming Ideas into Exceptional Apparel Designs
            </h1>

            <p
              className="mt-3"
              style={{
                color: "#333",
                lineHeight: "1.8",
                maxWidth: "500px",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(20px)",
                transition: "1s ease",
              }}
            >
              At Smuk Expohub Pvt Ltd, design is at the heart of everything we create.
              Our design team focuses on transforming creative ideas into stylish and
              market-ready apparel. By combining fashion trends, fabric innovation,
              and skilled craftsmanship, we develop designs that stand out in today’s
              competitive fashion industry.
            </p>

          </div>

          <div className="col-md-6 d-none d-md-block">

            <div style={{ position: "relative", height: "350px" }}>

              <div
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  background: "#C8A96A",
                  borderRadius: "50%",
                  top: "20%",
                  left: "20%",
                  opacity: 0.2,
                  animation: "moveCircle 8s infinite alternate ease-in-out",
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  background: "#1A1A1A",
                  borderRadius: "50%",
                  top: "40%",
                  left: "50%",
                  opacity: 0.1,
                  animation: "moveCircle2 10s infinite alternate ease-in-out",
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "120px",
                  background: "#C8A96A",
                  borderRadius: "20%",
                  top: "10%",
                  right: "10%",
                  opacity: 0.2,
                  transform: "rotate(45deg)",
                  animation: "rotateBox 12s infinite linear",
                }}
              ></div>

            </div>

          </div>

        </div>

      </div>

      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0,0); }
            100% { transform: translate(120px,80px); }
          }

          @keyframes float2 {
            0% { transform: translate(0,0); }
            100% { transform: translate(-100px,-80px); }
          }

          @keyframes moveCircle {
            0% { transform: translateY(0); }
            100% { transform: translateY(-30px); }
          }

          @keyframes moveCircle2 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-40px); }
          }

          @keyframes rotateBox {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

    </div>
  );
}

export default DesignHero;