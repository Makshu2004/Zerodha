import React from "react";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <h1 className="mb-4 fs-2">404 Not Found</h1>
          <p className="mb-5">
           Sorry, the page you are looking for does not exist.
          </p>
          <Link
           class="navbar-brand" to="/"
          >
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:" auto" }}>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
