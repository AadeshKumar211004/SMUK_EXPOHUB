import React, { useEffect, useState } from "react";
import { Carousel } from "bootstrap"; // 🔥 IMPORTANT

const texts = [
  "Wear SMUKE For Successful Living.",
  "Bridging Global Fashion Needs with Ethical Manufacturing.",
  "High-Quality Manufacturing & Timely Export.",
];

function Hero() {

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const typingSpeed = 80;

    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
    }
  }, [charIndex, textIndex]);

  useEffect(() => {
    const element = document.querySelector("#heroCarousel");

    if (element) {
      new Carousel(element, {
        interval: 5000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div id="home" style={{ position: "relative" }}>

      <div id="heroCarousel" className="carousel slide">
        <div className="carousel-inner">

          {["/slide1.jpeg", "/slide2.jpeg", "/slide3.jpeg", "/slide4.jpeg", "/about.jpeg"].map((img, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <img
                src={img}
                className="d-block hero-img"     
                alt="slide"
              />
            </div>
          ))}

        </div>

      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "90vh",
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="position-absolute top-50 start-50 translate-middle text-center"
        style={{
          zIndex: 2,
          width: "80%",
          color: "#F5F2EB",
        }}
      >
        <h1 className=" mt-0 mb-4" style={{color : "#F5F2EB", fontSize:"22", fontFamily: 'Playfair Display, serif',}}>Your Trusted Garment Jewellery & Softline Sourcing & Manufacturing Partner in India & China.</h1>
        <h4 className=" display-6 ">
          {displayText}
          <span style={{ color: "#C8A96A" }}>|</span>
        </h4>

        <p className="mt-5 fs-5 ">
          With over 10 years of experience, our professional team provides seamless, end-to-end buying services, leveraging our strong network in India and China to deliver value added goods , luxury items in competitive prices with superior quality, and on-time shipments.  
        </p>
      </div>

    </div>
  );
}

export default Hero;