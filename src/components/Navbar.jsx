import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -90;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNav = (id) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        const menu = dropdownRef.current.querySelector(".dropdown-menu");
        menu?.classList.remove("show");
      }
    };

    const handleScroll = () => {
      const menu = dropdownRef.current?.querySelector(".dropdown-menu");
      menu?.classList.remove("show");
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => setMenuOpen(false);
    const handleScroll = () => setMenuOpen(false);

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-light shadow-sm fixed-top"
      style={{ top: "40px", zIndex: 1040 }}
    >
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            src="/logo.jpeg"
            alt="logo"
            style={{
              height: "50px",
              borderRadius: "60px",
              objectFit: "cover",
              marginRight: "10px",
              border: "2px solid #C8A96A",
            }}
          />
        </div>

        <button
          className="navbar-toggler"
          onClick={(e) => {
            e.stopPropagation(); 
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul
            className="navbar-nav ms-auto gap-3 fw-semibold fs-6"
            onClick={() => setMenuOpen(false)}
          >
            {" "}
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNav("home")}>
                Home
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNav("about")}>
                About
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNav("mission")}>
                Our Mission
              </span>
            </li>
        
            <li
              className="nav-item dropdown"
              ref={dropdownRef}
              onMouseEnter={() => {
                const menu =
                  dropdownRef.current.querySelector(".dropdown-menu");
                menu.classList.add("show");
              }}
              onMouseLeave={() => {
                const menu =
                  dropdownRef.current.querySelector(".dropdown-menu");
                menu.classList.remove("show");
              }}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  const menu = e.currentTarget.nextElementSibling;
                  menu.classList.toggle("show");
                }}
              >
                Services
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/manufacturing">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/buying">
                    Buying
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/distribution">
                    Distribution
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/design">
                    Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/consulting">
                    Consulting
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNav("catalogue")}>
                Catalogue
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNav("faq")}>
                FAQ
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNav("contact")}>
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
