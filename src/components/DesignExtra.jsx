import React, { useEffect } from "react";

function DesignCommitment() {
  

  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

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
    <div
      className="py-5 mt-2" 
      style={{
        background: "#F5F2EB",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(200,169,106,0.2), transparent)",
          top: "-50px",
          left: "-50px",
          animation: "moveGlow1 10s infinite alternate",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(200,169,106,0.15), transparent)",
          bottom: "-40px",
          right: "-40px",
          animation: "moveGlow2 12s infinite alternate",
        }}
      ></div>

      <div className="container">

        <div
          className="text-center fade-up"
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            transition: "0.6s ease",
          }}
        >

          <h2
            className="fw-bold"
            style={{ color: "#1A1A1A", letterSpacing: "1px" }}
          >
            Our Commitment to Design Excellence
          </h2>

          <p
            className="mt-4 mx-auto"
            style={{
              maxWidth: "720px",
              lineHeight: "1.9",
              color: "#333",
            }}
          >
            At Smuk Expohub Pvt Ltd, we believe that great design is the foundation
            of successful apparel. Our goal is to help brands bring their creative
            vision to life by delivering designs that combine style, comfort, and
            quality while meeting the expectations of modern consumers.
          </p>

        </div>

        <div className="row g-3 mt-5">

          <div
            className="col-md-6 fade-up"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              transition: "0.6s ease",
            }}
          >
            <div className="img-wrap big-img">
              <img src="/distribution/photo1.jpeg" alt="design" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-3">

              {["/design/photo3.jpeg","/design/photo4.jpeg","/design/photo6.jpeg","/design/photo7.jpeg","/design/photo8.jpeg","/design/photo11.jpeg"].map((img, i) => (
                <div
                  key={i}
                  className="col-6 fade-up"
                  style={{
                    opacity: 0,
                    transform: "translateY(50px)",
                    transition: `0.6s ease ${i * 0.1}s`,
                  }}
                >
                  <div className={`img-wrap small-img img-${i}`}>
                    <img src={img} alt="design" />
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

      <style>
        {`
          .fade-up.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .img-wrap {
            overflow: hidden;
            border-radius: 14px;
            position: relative;
          }

          .img-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.5s ease;
          }

          .big-img {
            height: 280px;
          }

          .small-img {
            height: 120px;
          }

          /* Hover depth */
          .img-wrap:hover img {
            transform: scale(1.1) rotate(1deg);
          }

          /* Floating variations */
          .img-0 img { animation: float1 6s infinite ease-in-out; }
          .img-1 img { animation: float2 7s infinite ease-in-out; }
          .img-2 img { animation: float3 8s infinite ease-in-out; }
          .img-3 img { animation: float2 6s infinite ease-in-out; }
          .img-4 img { animation: float1 7s infinite ease-in-out; }

          @keyframes float1 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }

          @keyframes float2 {
            0% { transform: translateY(0); }
            50% { transform: translateY(8px); }
            100% { transform: translateY(0); }
          }

          @keyframes float3 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px) rotate(1deg); }
            100% { transform: translateY(0); }
          }

          /* Background glow movement */
          @keyframes moveGlow1 {
            0% { transform: translate(0,0); }
            100% { transform: translate(80px,60px); }
          }

          @keyframes moveGlow2 {
            0% { transform: translate(0,0); }
            100% { transform: translate(-60px,-50px); }
          }
        `}
      </style>

    </div>
  );
}

export default DesignCommitment;