import React, { useState, useEffect } from "react";

function DistributionExtra() {

  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    items.forEach((el) => observer.observe(el));
  }, []);

  const images = ["/distribution/photo2.jpeg","/distribution/photo3.jpeg","/distribution/photo4.jpeg","/distribution/photo5.jpeg","/distribution/photo6.jpeg","/distribution/photo7.jpeg"];

  return (
    <div className="py-5" style={{ background: "#F5F2EB" }}>

      <div className="container">

        <div className="row align-items-center mb-5">

          <div className="col-md-6 fade-up">
            <h2 className="fw-bold" style={{ color: "#1A1A1A" }}>
              Our Commitment to Partners
            </h2>

            <p className="mt-3" style={{ color: "#333", lineHeight: "1.8" }}>
              At Smuk Expohub Pvt Ltd, we believe that effective distribution is
              essential for business growth. Our team is committed to building
              strong partnerships with distributors and retailers by ensuring
              consistent product availability, smooth operations, and dependable service.
            </p>
          </div>

          <div className="col-md-6 fade-up">
            <div style={{ overflow: "hidden", borderRadius: "16px" }}>
              <img
                src="/distribution/photo1.jpeg"
                alt="main"
                onClick={() => setSelectedImg("/distribution/photo1.jpeg")}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "0.4s",
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
          </div>

        </div>

        <div className="row g-3">

          {images.map((img, i) => (
            <div
              className={`col-md-2 col-6 fade-up`}
              key={i}
              style={{
                transform: "translateY(40px)",
                opacity: 0,
                transition: `0.5s ease ${i * 0.1}s`,
              }}
            >

              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "12px",
                  position: "relative",
                }}
              >

                <img
                  src={img}
                  alt="grid"
                  onClick={() => setSelectedImg(img)}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "0.4s ease",
                  }}
                  className="grid-img"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <img
            src={selectedImg}
            alt="preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
            }}
          />
        </div>
      )}

      <style>
        {`
          .fade-up.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          /* Hover effect */
          .grid-img:hover {
            transform: scale(1.1) rotate(1deg);
          }

          /* Unique floating animation */
          .row .col-md-2:nth-child(odd) img {
            animation: floatUp 5s infinite ease-in-out;
          }

          .row .col-md-2:nth-child(even) img {
            animation: floatDown 6s infinite ease-in-out;
          }

          @keyframes floatUp {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }

          @keyframes floatDown {
            0% { transform: translateY(0); }
            50% { transform: translateY(8px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

    </div>
  );
}

export default DistributionExtra;