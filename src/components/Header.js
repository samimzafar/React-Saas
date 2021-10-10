import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__content-h1">About Us</h1>
        <div className="header__content-links">
          <a href="">Home</a>
          <span className="header__content-span"></span>
          <a href="">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
