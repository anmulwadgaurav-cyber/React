import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Horizon Courts</h1>
      <div className="links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contacts</a>
      </div>
      <div className="book-now-btn">
        <p>Book now</p>
        <i class="ri-arrow-right-up-long-line"></i>
      </div>
    </div>
  );
};

export default Navbar;
