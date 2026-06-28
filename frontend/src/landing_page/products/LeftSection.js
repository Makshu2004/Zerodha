import React from "react";

function LeftSection({
  imageURL,
  productName,
  productdescription,
  typedemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3 mt-5">
          <img src={imageURL} />
        </div>

       
        <div className="col-6 p-5 mt-5 ">
          <h1>{productName}</h1>
          <p style={{lineHeight:"2"}}>{productdescription}</p>
          <div className="mb-4">
            <a href={typedemo}>Try demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnmore} style={{marginLeft:"100px"}}>Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div>
            {" "}
            <a href={googleplay}>
              <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appstore} style={{marginLeft:"50px"}}>
              <img src="media/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
