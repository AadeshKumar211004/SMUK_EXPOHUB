import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

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

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:8000/api/contact", formData);

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact-section py-5 mt-2">

      <Toaster position="top-right" />

      <div className="container">

        <h2 className="contact-heading mb-4 text-center fade-in">
          CONTACT US
        </h2>

        <div className="row align-items-stretch">

          <div className="col-md-6 fade-in">

            <form className="contact-form" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control mb-3"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="form-control mb-3"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="form-control mb-3"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                className="btn contact-btn w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          
          <div className="col-md-6 fade-in d-flex">

            <div className="map-box w-100">

              <iframe
                src="https://maps.google.com/maps?q=C-23%20Near%20Royal%20Palace%20Sector%2013%20Vasundhara%20Ghaziabad%20Uttar%20Pradesh%20201010&z=15&output=embed"
                className="map-frame"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;