import React from 'react';
import Stocks from '../assets/Stocks.mp4';
// import Vedio2 from "../assets/Vedio2"
// import Diversitfication from "../assets/Diversitfication"
import Crypto from '../assets/Crypto.mp4';
import Investing from '../assets/Investing.mp4';
import risk from '../assets/risk.mp4';
// import risk from "../assets/risk";
// import Investing from "../assets/Investing"

import Freedom from '../assets/Freedom.mp4';

function Tutorials() {
  return (
    <>
      <div className='heading' style={{ width: "fit-content", margin: "auto" }}>
        <br />
        <h1 style={{ color: "#0071bd", fontSize: "30px" }}>Knowledge Section</h1>
        <br />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="tutorial" style={{ marginRight: "20px", marginBottom: "20px" }}>
          <video width="320" height="180" controls>
            <source src={Stocks} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Intro to Stocks</h3>
          <a style={{ textDecoration: "none", fontSize: "21px" }} href="http://youtube.com/watch?v=XBMEdwvCJ7U">Learn More</a>
        </div>
        <div className="tutorial" style={{ marginRight: "20px", marginBottom: "20px" }}>
          <video width="320" height="180" controls>
            <source src={Freedom} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Nifty / Sensex 101</h3>
          <a style={{ textDecoration: "none", fontSize: "21px" }} href="https://groww.in/p/what-is-nifty">Learn More</a>
        </div>
        {/* Repeat this structure for other tutorials */}
      </div>
    </>
  );
}

export default Tutorials;
