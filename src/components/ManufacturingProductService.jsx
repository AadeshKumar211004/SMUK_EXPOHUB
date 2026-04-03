import React, { useEffect } from "react";

function ManufacturingProcess() {

  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

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
    <div className="process-section py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6 fade-up">

            <h2 className="process-heading">
              Our Manufacturing Process
            </h2>

            <p className="process-text">
              We follow a structured and efficient manufacturing process to
              ensure premium quality products. From sourcing raw materials to
              final delivery, every step is carefully monitored.
            </p>

            <ul className="process-list">
              <li>✔ Raw Material Sourcing</li>
              <li>✔ Advanced Production Techniques</li>
              <li>✔ Quality Control & Inspection</li>
              <li>✔ Packaging & Delivery</li>
            </ul>
            <p className="process-text">
                <b>Commitment to Quality</b> <br />
                Quality is at the core of everything we do at Smuk Expohub Pvt Ltd. Our dedicated team ensures every garment reflects precision, durability, and superior craftsmanship, making us a trusted partner for fashion brands worldwide.
            </p>
          </div>

          <div className="col-md-6 fade-up">

            <img
              src="/manufacturing/main.jpeg"
              alt="process"
              className="img-fluid main-img"
            />

          </div>

        </div>

        <div className="row mt-5">

          {["/manufacturing/photo1.jpeg", "/manufacturing/photo2.jpeg", "/manufacturing/photo3.jpeg", "/manufacturing/photo4.jpeg"].map((img, i) => (
            <div className="col-md-3 col-6 mb-4 fade-up" key={i}>

              <div className="process-card">
                <img src={img} alt="process" />
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ManufacturingProcess;