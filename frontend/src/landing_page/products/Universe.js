import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-3">
      <div className="row text-center">
        <h1 className="mb-3 text-muted fs-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 ">
          <img src="media/zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="text-small text-muted p-3" style={{ fontSize: "12px" }}>
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>

          <br />

          <img src="media/streakLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted p-3" style={{ fontSize: "12px" }}>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/sensibullLogo.svg"
            style={{ width: "50%", marginBottom: "20px" }}
          />
          <p className="text-small text-muted p-3" style={{ fontSize: "12px" }}>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>

          <br />

          <img
            src="media/smallcaseLogo.png"
            style={{ width: "50%", marginBottom: "20px" }}
          />
          <p className="text-small text-muted p-3" style={{ fontSize: "12px" }}>
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted p-3" style={{ fontSize: "12px" }}>
            Investment research platform <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>

          <br />
          <img src="media/dittoLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted p-3" style={{ fontSize: "12px" }}>
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <button onClick={()=>window.location.href="http://localhost:3000/signup"} className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%",margin:" auto" }} >Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
