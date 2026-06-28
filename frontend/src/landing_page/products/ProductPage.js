import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        typedemo="Type Demo"
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
        productName="Console"
        productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        typedemo=""
        imageURL="media/console.png"
      />
      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        typedemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
        productName="Kite Connect API"
        productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        typedemo=""
        imageURL="media/kiteconnect.png"
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        typedemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
     <p className="text-center mb-5 p-5">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
