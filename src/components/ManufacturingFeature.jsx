import React from "react";
import { FaIndustry, FaCogs, FaCheckCircle } from "react-icons/fa";

function ManufacturingFeatures() {
  return (
    <div className="manu-features py-5">

      <div className="container">

        <div className="row text-center">

          <div className="col-md-4">
            <div className="feature-card">
              <FaIndustry />
              <h5>Advanced Machinery</h5>
              <p>Latest technology for efficient production</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <FaCogs />
              <h5>Precision Work</h5>
              <p>High accuracy manufacturing process</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <FaCheckCircle />
              <h5>Quality Assurance</h5>
              <p>Strict quality control standards</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ManufacturingFeatures;