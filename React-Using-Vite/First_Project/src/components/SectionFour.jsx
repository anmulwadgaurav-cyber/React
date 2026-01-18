import React from "react";

const SectionFour = () => {
  return (
    <div className="section-four">
      <div className="left-side">
        <div className="card pro-mem">
          <div className="wrapper">
            <h1>Pro Plan</h1>
            <button className="view-features">
              View features <i class="ri-arrow-right-up-long-line"></i>
            </button>
          </div>
          <div className="details">
            <p>Most Popular Plan</p>
            <h1>Pro Membership</h1>
            <div className="bullets">
              <p>
                <i class="ri-circle-fill"></i>8 group classes
              </p>
              <p>
                <i class="ri-circle-fill"></i>4 court hours
              </p>
              <p>
                <i class="ri-circle-fill"></i>2 private lesson
              </p>
              <p>
                <i class="ri-circle-fill"></i>
                Club tournament access
              </p>
            </div>
            <button>
              Buy Membership <i class="ri-arrow-right-up-long-line"></i>
            </button>
            <h1 className="price">$120</h1>
          </div>
        </div>
        <div className="card basic-mem">
          <div className="wrapper">
            <h1>Basic Plan</h1>
            <button className="view-features">
              View features <i class="ri-arrow-right-up-long-line"></i>
            </button>
          </div>
          <div className="details">
            <p>Best to Start Plan</p>
            <h1>Basic Membership</h1>
            <div className="bullets">
              <p>
                <i class="ri-circle-fill"></i>6 group classes
              </p>
              <p>
                <i class="ri-circle-fill"></i>2 court hours
              </p>
              <p>
                <i class="ri-circle-fill"></i>1 private lesson
              </p>
              <p>
                <i class="ri-circle-fill"></i>
                Club tournament access
              </p>
            </div>
            <button>
              Buy Membership <i class="ri-arrow-right-up-long-line"></i>
            </button>
            <h1 className="price">$100</h1>
          </div>
        </div>
        <div className="card elite-mem">
          <div className="wrapper">
            <h1>Elite Plan</h1>
            <button className="view-features">
              View features <i class="ri-arrow-right-up-long-line"></i>
            </button>
          </div>
          <div className="details">
            <p>All in one Plan</p>
            <h1>Elite Membership</h1>
            <div className="bullets">
              <p>
                <i class="ri-circle-fill"></i>10 group classes
              </p>
              <p>
                <i class="ri-circle-fill"></i>6 court hours
              </p>
              <p>
                <i class="ri-circle-fill"></i>4 private lesson
              </p>
              <p>
                <i class="ri-circle-fill"></i>
                Club tournament access
              </p>
            </div>
            <button>
              Buy Membership <i class="ri-arrow-right-up-long-line"></i>
            </button>
            <h1 className="price">$140</h1>
          </div>
        </div>
      </div>
      <div className="right-side">
        <p className="membership-btn">Memberships</p>
        <h1>
          Three refined membership <br />
          plans - elevate your game.
        </h1>
        <p>
          Personalized benefits. Premium experience. <br />
          One decision away.
        </p>
        <i class="ri-star-line"></i>
      </div>
    </div>
  );
};

export default SectionFour;
