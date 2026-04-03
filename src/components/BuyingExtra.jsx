import React, { useEffect } from "react";

function BuyingCommitment() {

  // Scroll Animation
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
    <div className="commit-section py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6 fade-up">

            <h2 className="commit-heading">
              Our Commitment
            </h2>

            <p className="commit-text">
              At Smuk Expohub Pvt Ltd, we are committed to building long-term
              relationships with our buyers by providing consistent quality,
              transparent communication, and dependable service.
            </p>

            <p className="commit-text">
              Our goal is to support brands and businesses in growing their
              apparel collections with trusted sourcing solutions.
            </p>

          </div>

          <div className="col-md-6 fade-up">

            <div className="commit-grid">

              <img src="/buying/photo1.jpeg" alt="img" />
              <img src="/buying/photo2.jpeg" alt="img" />
              <img src="/buying/photo3.jpeg" alt="img" />
              <img src="/buying/photo4.jpeg" alt="img" />
              <img src="/buying/photo5.jpeg" alt="img" />
              <img src="/buying/photo6.jpeg" alt="img" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BuyingCommitment;