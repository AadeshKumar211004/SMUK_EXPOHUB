import React, { useEffect } from "react";

const steps = [
  {
    title: "Trend Research",
    desc: "Our designers continuously study global fashion trends, consumer preferences, and market insights to develop innovative and relevant apparel designs.",
    img: "/design/photo1.jpeg",
  },
  {
    title: "Concept Development",
    desc: "We transform creative ideas into detailed design concepts, focusing on style, fit, and overall garment structure.",
    img: "/design/photo2.jpeg",
  },
  {
    title: "Fabric & Material Selection",
    desc: "Choosing the right fabric is crucial for a successful design. Our team carefully selects materials that enhance both the look and comfort of the garment.",
    img: "/design/photo10.jpeg",
  },
  {
    title: "Sampling & Prototyping",
    desc: "Before production, we create samples and prototypes to ensure that every detail of the design meets our quality and style standards.",
    img: "/design/photo9.jpeg",
  },
];

function DesignProcess() {

  useEffect(() => {
    const items = document.querySelectorAll(".process-row");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, i * 200);
        }
      });
    }, { threshold: 0.3 });

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="py-5" style={{ background: "#F5F2EB" }}>

      <div className="container">

        <h2 className="fw-bold text-center mb-5" style={{ color: "#1A1A1A" }}>
          Our Design Process
        </h2>

        {steps.map((step, i) => (
          <div
            key={i}
            className={`row align-items-center mb-5 process-row ${
              i % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            style={{
              opacity: 0,
              transform: "translateY(60px)",
              transition: "0.8s ease",
            }}
          >

            <div className="col-md-6">
              <h4 className="fw-bold" style={{ color: "#1A1A1A" }}>
                {step.title}
              </h4>

              <p style={{ color: "#333", marginTop: "10px" }}>
                {step.desc}
              </p>
            </div>

            <div className="col-md-6">

              <div
                className="image-box"
                style={{
                  overflow: "hidden",
                  borderRadius: "16px",
                  position: "relative",
                }}
              >

                <img
                  src={step.img}
                  alt="design"
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    transition: "0.6s ease",
                  }}
                  className="process-img"
                />

                <div
                  className="img-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
                    opacity: 0,
                    transition: "0.5s",
                  }}
                ></div>

              </div>

            </div>

          </div>
        ))}

      </div>

      <style>
        {`
          .process-row.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .image-box:hover .process-img {
            transform: scale(1.1) rotate(1deg);
          }

          .image-box:hover .img-overlay {
            opacity: 1;
          }

          .process-img {
            animation: floatImage 6s ease-in-out infinite;
          }

          @keyframes floatImage {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @media(max-width:768px){
            .process-row {
              text-align: center;
            }
          }
        `}
      </style>

    </div>
  );
}

export default DesignProcess;