import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  ">
        <h1 className=" text-center  border-top p-5">People</h1>
      </div>
      <div
        className="row  text-muted fs-6"
        style={{ lineHeight: "2", fontSize: "1.2en" }}
      >
        <div className="col p-4 text-center ">
          <img
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%", marginLeft: "150px" }}
          />
          <h4 className="mt-4 mb-3" style={{ marginLeft: "150px" }}>
            Nithin Kamath
          </h4>
          <h5 style={{ marginLeft: "150px" }}>Founder, CEO</h5>
        </div>
        <div className="col p-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
