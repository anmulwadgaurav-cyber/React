import React from "react";

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="left-side">
        <p className="services-btn">Services</p>
        <h1>
          Explore our full range of coaching, <br />
          training, and tennis experiences. From <br />
          first serve to match point - we've <br />
          got the right program for you.
        </h1>
        <button className="explore-now-btn">
          Explore Now <i class="ri-arrow-right-up-long-line"></i>
        </button>
      </div>
      <div className="middle">
        <p>Training Programs</p>
        <div className="text-arrow">
          <p>
            Programs designed for <br />
            all ages and abilities.
          </p>
          <p>
            <i class="ri-arrow-right-up-long-line"></i>
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="top-side">
          <p>Court Access</p>
          <p className="hourly-court">Hourly Court Rental</p>
        </div>
        <div className="bottom-side">
          <p>
            Step into a space built for <br />
            players - to grow. compete. <br />
            and thrive.
          </p>
          <div className="arrows">
            <i class="ri-arrow-left-long-line"></i>
            <i class="ri-arrow-right-long-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
