import React, { useEffect } from "react";

function ConsultingCommitment() {

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
        overflow: "hidden",
      }}
    >

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
            style={{ color: "#1A1A1A" }}
          >
            Our Commitment
          </h2>

          <p
            className="mt-3 mx-auto"
            style={{
              maxWidth: "720px",
              color: "#333",
              lineHeight: "1.8",
            }}
          >
            At Smuk Expohub Pvt Ltd, our consulting services are designed to empower
            businesses with the knowledge and strategies needed to succeed in the
            global apparel market. We aim to build long-term partnerships by offering
            reliable advice and professional expertise.
          </p>

        </div>

        <div className="row mt-5 g-3">

          <div className="col-md-6 fade-up">
            <div className="img-box big">
              <img src="/consulting/photo13.jpeg" alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-3">

              {["/consulting/photo8.jpeg","/consulting/photo12.jpeg","/consulting/photo14.jpeg","/consulting/photo1.jpeg"].map((img, i) => (
                <div key={i} className="col-6 fade-up">
                  <div className={`img-box small img-${i}`}>
                    <img src={img} alt="" />
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

      <style>
        {`
          .fade-up {
            opacity: 0;
            transform: translateY(50px);
            transition: 0.6s ease;
          }

          .fade-up.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .img-box {
            overflow: hidden;
            border-radius: 14px;
            panding-top: 50vh;
          }

          .img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.5s ease;
          }

          .big {
            height: 350px;
          }

          .small {
            height: 170px;
          }

          /* Hover effect */
          .img-box:hover img {
            transform: scale(1.1);
          }

          /* Floating animations */
          .img-0 img { animation: float1 6s infinite ease-in-out; }
          .img-1 img { animation: float2 7s infinite ease-in-out; }
          .img-2 img { animation: float3 8s infinite ease-in-out; }
          .img-3 img { animation: float2 6s infinite ease-in-out; }

          @keyframes float1 {
            50% { transform: translateY(-8px); }
          }

          @keyframes float2 {
            50% { transform: translateY(8px); }
          }

          @keyframes float3 {
            50% { transform: translateY(-6px); }
          }

          /* 📱 MOBILE */
          @media(max-width:768px){

            .big {
              height: 200px;
            }

            .small {
              height: 100px;
            }

          }
        `}
      </style>

    </div>
  );
}

export default ConsultingCommitment;