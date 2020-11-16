import React from "react";
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to Make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams </span>Come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us from any photography or videography ideas that you have.we
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="imgge">
        <img src={home1} alt="gye" />
      </div>
    </div>
  );
}

export default AboutSection;
