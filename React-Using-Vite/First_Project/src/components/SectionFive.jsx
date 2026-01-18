import React from "react";

const SectionFive = () => {
  return (
    <div className="section-five">
      <div className="left-side">
        <div className="top">
          <p className="feel-our-rythm">Feel Our Rythm</p>
          <h2>
            "As a busy mom who hadn't palyed since <br />
            college, Horizount made my comeback <br />
            magical. Coaach Lisa transformed my slice <br />
            into a weapon - now my husband refuses <br />
            to play me."
          </h2>
          <div className="rating">
            <div className="stars">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-half-s-line"></i>
            </div>
            <p>4.8</p>
          </div>
        </div>
        <div className="bottom">
          <div className="name">
            <h3>Skylar Bennett</h3>
            <p>Amateur Champion</p>
          </div>
          <div className="arrow-set">
            <p className="left-arrow">
              <i class="ri-arrow-left-long-line"></i>
            </p>
            <p className="right-arrow">
              <i class="ri-arrow-right-long-line"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="top">
          <h1>
            01<span> /8</span>
          </h1>
        </div>
        <div className="bottom">
          <div className="image-container"></div>
          <h1>
            <i class="ri-baseball-line"></i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
