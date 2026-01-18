import React from "react";

const Footer = () => {
  return (
    <div className="section-eight">
      <div className="top">
        <div className="left-side">
          <h1>
            Join a vibrant tennis community where your <br />
            journey toward better skills and new friendship <br />
            begins today.
          </h1>
          <button>Buy Membership</button>
        </div>
        <div className="right-side">
          <p>Follow us</p>
          <div className="links">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Tik Tok</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-top">
          <div className="left-side">
            <h1>Horizon Courts</h1>
          </div>
          <div className="right-side">
            <div className="about">
              <p className="head">About</p>
              <p>Services</p>
              <p>Coaches</p>
              <p>Events</p>
              <p>Membership</p>
            </div>
            <div className="contact">
              <p>Contact</p>
              <p>123 Pacific Drive <br />Santa Monica, CA 90401</p>
              <p>Open daily: 7:00 AM - 10:00PM</p>
              <p>(310) 555-7890</p>
            </div>
          </div>
        </div>
        <div className="last">
          <p>&copy; 2026 Copyright</p>
          <div className="tandc">
            <p>Privacy</p>
            <p>Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
