import React, { useState } from "react";

function ProductGrid({ data, title }) {

  const [visibleCount, setVisibleCount] = useState(8);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="product-section py-5">

      <div className="container">

        <h2 className="product-heading text-center mb-5">
          {title}
        </h2>

        <div className="row">

          {data.slice(0, visibleCount).map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>

              <div className="product-card">

                <img
                  src={item.image}
                  alt={item.name}
                  className="product-img"
                />

                <div className="product-content">
                  <h6>{item.title}</h6>
                  <h5>{item.name}</h5>
                  <p>Product Code : {item.Product_Code}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {visibleCount < data.length && (
          <div className="text-center mt-4">
            <button className="btn view-btn" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProductGrid;