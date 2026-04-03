import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        height: "100vh",
        background: "#F5F2EB",
        flexDirection: "column",
      }}
    >

      {/* 🔥 BIG 404 */}
      <h1
        style={{
          fontSize: "120px",
          fontWeight: "900",
          color: "#C8A96A",
          marginBottom: "10px",
        }}
      >
        404
      </h1>

      {/* 🔥 TITLE */}
      <h3 style={{ color: "#1A1A1A", fontWeight: "700" }}>
        Page Not Found
      </h3>

      {/* 🔥 TEXT */}
      <p
        style={{
          color: "#333",
          maxWidth: "500px",
          marginTop: "10px",
        }}
      >
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* 🔥 BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          border: "none",
          background: "#C8A96A",
          color: "#1A1A1A",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Go Back Home
      </button>

    </div>
  );
}

export default NotFound;