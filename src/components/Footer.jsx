import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  useEffect(() => {
    const elements = document.querySelectorAll(".footer-fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row">

          <div className="col-md-3 footer-fade">
            <img src="/logo.jpeg" alt="logo" className="footer-logo mb-3" />
            <p className="footer-text">
              We deliver premium quality manufacturing, sourcing and logistics
              solutions worldwide.
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-3 footer-fade">
            <h5 className="footer-heading">Contact</h5>

            <div className="footer-item">
              <FaMapMarkerAlt style={{fontSize:"35px"}}/>{" "}
              <span>
                C-23,Near by Royal Palace, Sector 13, Vasundhara, Ghaziabad,
                201010, Uttar Pradesh, India
              </span>
            </div>

            <div className="footer-item">
              <FaPhoneAlt /> <span>+91 9817813171</span>
            </div>

            <div className="footer-item">
              <FaEnvelope /> <span>info@smukexpo.com</span>
            </div>
          </div>

          {/* Business */}
          <div className="col-md-3 footer-fade">
            <h5 className="footer-heading">Business Info</h5>

            <p className="footer-text">GST No: 22AAAAA0000A1Z5</p>
            <p className="footer-text">Bank: Your Bank</p>
            <p className="footer-text">A/C: 1234XXXXXXX890</p>
            <p className="footer-text">IFSC: XXXXXXXX1234</p>
            <p><strong>Note - </strong>Payment Details Will be Shared With Customers After Order Confirmation.</p>
          </div>

          {/* Export */}
          <div className="col-md-3 footer-fade">
            <h5 className="footer-heading">Export</h5>

            <p className="footer-text">India</p>
            <p className="footer-text">China</p>
            {/* <p className="footer-text">UAE</p>
            <p className="footer-text">Australia</p> */}
          </div>

          {/* 🔥 Social */}
          <div className="col-12 footer-fade text-center mt-4">
            <div className="social-icons">
              <FaFacebookF className="fb" />
              <FaInstagram className="insta" />
              <a
                href="https://wa.me/919817813171?text=Hello%20...!!"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25D366", fontSize: "22px" }}
              >
                <FaWhatsapp />
              </a>
              <FaTelegramPlane className="telegram" />
              <FaYoutube className="youtube" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        © {new Date().getFullYear()} SMUK Pvt Ltd | Ensuring Products BSCI
        Certified.
      </div>
    </footer>
  );
}

export default Footer;
