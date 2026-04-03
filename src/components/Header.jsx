import React from "react";

function Header() {
  return (
    <div
      className="bg-primary-custom text-white fixed-top"
      style={{ zIndex: 1050 }}
    >
      <div className="container">

        <div className="d-none d-md-flex justify-content-between align-items-center py-2">
          <span>
            <strong>SMUK EXPOHUB</strong> PVT LTD
          </span>
          <span>
            📍 Vasundhara, Ghaziabad | 📞 +91 9817813171
          </span>
        </div>

        <div className="d-md-none">

          <div className="d-flex justify-content-between">
            <span><strong>SMUK</strong></span>
            <span style={{ fontSize: "12px" }}>
              📍 Vasundhara
            </span>
          </div>

          <div className="d-flex justify-content-between">
            <span style={{ fontSize: "13px" }}>
              EXPOHUB PVT LTD
            </span>
            <span style={{ fontSize: "12px" }}>
              📞 +91 9817813171
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Header;