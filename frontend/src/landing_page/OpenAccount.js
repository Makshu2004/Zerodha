import React from "react";

function OpenAccount() {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <h1 className="mb-4 fs-2">Open a Zerodha account</h1>
          <p className="mb-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button onClick={()=>window.location.href="http://localhost:3000/signup"}
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: " auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
