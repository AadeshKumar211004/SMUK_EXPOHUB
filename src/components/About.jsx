import React, { useState, useEffect, useRef } from "react";

function About() {

  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef();

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        setShowMore(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="about"
      className="py-5 about-section"
      style={{ backgroundColor: "#F5F2EB", marginTop:"10px" }}
    >
      <div className="container ">

        <div className="row align-items-start">

            
            <span className="about-label  d-none d-md-block">
                ABOUT US
            </span>

          <div className="col-12 d-md-none mb-3">
            <h5 className="about-title">ABOUT US</h5>
          </div>

          <div className="col-md-6 mb-4 mb-md-0 ">
            <img
                src="about.jpeg"
                alt="about"
                className="img-fluid shadow about-img"
                style={{ height: "100%", objectFit: "cover" }}
            />
         </div>

          <div className="col-md-6 pt-1 " ref={contentRef}>

            
            <h2 className="about-heading">
                We Provide Premium Quality Solutions
            </h2>

            <p className="mt-3 about-text">
              We are committed to delivering excellence through our wide range of
              services including manufacturing, sourcing, logistics, and design.
            </p>
            <p className="about-text">
                  Our focus is to provide high-quality solutions tailored to meet
                  your business needs with professionalism and trust.
                </p>

            {showMore && (
              <>

                <p className="about-text">
                  With years of experience and a dedicated team, we ensure that every
                  product and service reflects our commitment to quality, innovation,
                  and customer satisfaction.
                </p>

                <div className="mt-3">
                  <div className="d-flex align-items-center mb-2">
                    <span className="check">✔</span>
                    <span>High Quality Standards</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <span className="check">✔</span>
                    <span>Trusted by Clients</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <span className="check">✔</span>
                    <span>Professional Team</span>
                  </div>
                </div>
              </>
            )}

            <button
              className="btn mt-4 px-4 py-2"
              style={{
                backgroundColor: "#C8A96A",
                color: "#1A1A1A",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Explore More"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;