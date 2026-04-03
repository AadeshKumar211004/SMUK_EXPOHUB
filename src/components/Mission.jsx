import React, { useEffect } from "react";
import { FaGem, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";

function Mission() {

  useEffect(() => {
    const cards = document.querySelectorAll(".mission-card");

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

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div id="mission" className="mission-section py-5 mt-2">

      <div className="container">


        <div className="row align-items-start">
            <span className="mission-label">
              OUR MISSION
            </span>

          <div className="col-md-5 mb-4">
           
            <h2 className="mission-heading">
              Delivering Excellence in Every Step
            </h2>

            <p className="mission-text">
              At Smuk Expohub Pvt Ltd, our mission is to transform the apparel sourcing industry by delivering sustainable, high-quality, and cost-effective garment solutions to brands across the globe. We are committed to building strong partnerships with our clients by understanding their unique requirements and providing products that meet international standards of quality, design, and reliability.
            </p>

            <p className="mission-text">
              We aim to promote responsible manufacturing by adopting sustainable practices, ethical sourcing, and efficient production processes. Through innovation, transparency, and continuous improvement, we strive to create value not only for our customers but also for the communities and environments connected to our supply chain.

            </p>

          </div>

          <div className="col-md-7">
            <div className="row">

              <div className="col-md-6 mb-4">
                <div className="mission-card">
                  <FaGem className="mission-icon" />
                  <h5>Quality Focus</h5>
                  <p>Maintaining top standards in every product and service.</p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="mission-card">
                  <FaUsers className="mission-icon" />
                  <h5>Customer First</h5>
                  <p>Understanding client needs and delivering excellence.</p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="mission-card">
                  <FaLightbulb className="mission-icon" />
                  <h5>Innovation</h5>
                  <p>Using modern ideas to improve business processes.</p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="mission-card">
                  <FaGlobe className="mission-icon" />
                  <h5>Global Reach</h5>
                  <p>Expanding services worldwide with strong logistics.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Mission;