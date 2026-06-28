import React from "react";

function RightSection({ productName, productdescription, typedemo, imageURL }) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "2" }}>{productdescription}</p>
          <div>
            <a href={typedemo}>
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-6 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
