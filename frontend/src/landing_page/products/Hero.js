import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom mb-5">
      <div className="row  text-center text-muted p-5 ">
        <h1 className="mb-4 fs-2">Zerodha Products</h1>
        <h4 className="mb-4">Sleek, modern, and intuitive trading platforms</h4>
        <p>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
