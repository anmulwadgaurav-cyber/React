import React from "react";

const Cards = () => {
  return (
    <div className="section-two">
      <div className="cards">
        <div className="card card-one">
          <h1 className="icon">
            <i class="ri-baseball-line"></i>
          </h1>
          <h1 className="context">
            Professional hard courts
            <br />
            <span className="span-one">
              with tournaments-grade <br />
              lighting & climate control - <br />
              play in
            </span>
            <span>
              {" "}
              perfect conditions, <br />
              in any season.
            </span>
          </h1>
          <div className="toggle-text">
            <div className="toggle">
              <div className="white-ball"></div>
            </div>
            <p>Game Mode</p>
          </div>
        </div>
        <div className="card card-two">
          <h1>Private & Group Lessons</h1>
        </div>
        <div className="card card-three">
          <div className="top">
            <h1>100+</h1>
            <p className="pro-coach">Pro Coaches</p>
            <p>
              Certified professionals ready to boost your <br />
              game from first serve to tournament level.
            </p>
          </div>
          <div className="bottom">
            <div className="stats beginner">
              <p className="level">Beginner</p>
              <div className="blue-balls">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
              </div>
              <p>55</p>
            </div>
            <div className="stats intermediate">
              <p className="level">Intermediate</p>
              <div className="blue-balls">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
              </div>
              <p>40</p>
            </div>
            <div className="stats advanced">
              <p className="level">Advanced</p>
              <div className="blue-balls">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
              </div>
              <p>35</p>
            </div>
          </div>
        </div>
      </div>
      <h1>A few more facts about us in numbers</h1>
      <div className="numbers">
        <div className="number">
          <h1>12 000+</h1>
          <p>Hour of play annually</p>
        </div>
        <div className="number">
          <h1>89%</h1>
          <p>Player Retention Rate</p>
        </div>
        <div className="number">
          <h1>1,200+</h1>
          <p>Active Numbers</p>
        </div>
        <div className="number">
          <h1>125+</h1>
          <p>Annual Tournaments</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
