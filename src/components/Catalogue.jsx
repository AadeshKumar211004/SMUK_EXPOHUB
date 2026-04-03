import React from "react";
import { useNavigate } from "react-router-dom";

function Catalogue() {

  const navigate = useNavigate();

  const categories = [
    {
      name: "Women's",
      image: "ladies.jpeg",
      path: "/ladies",
    },
    {
      name: "Men's",
      image: "men.jpeg",
      path: "/men",
    },
    {
      name: "Pet Animals",
      image: "pet.jpeg",
      path: "/pet",
    },
  ];

  return (
    
    <div id="catalogue" className="catalogue-section py-5 mt-2">
    
      <div className="container">

        <div className="text-center mb-5">
          <span className="catalogue-label"> CATALOGUE </span>
          <h2 className="catalogue-heading">
            Explore Our Catagories
          </h2>
        </div>

        <div className="row">

          {categories.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>

              <div
                className="catalogue-card"
                onClick={() => navigate(item.path)}
              >

                <div className="catalogue-img-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="catalogue-img"
                  />
                </div>

                <div className="catalogue-content">
                  <h5>{item.name}</h5>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Catalogue;