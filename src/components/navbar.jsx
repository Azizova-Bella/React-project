import React from "react";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <navbar>
      <img src={logo} alt="" />
      <div className="uls lss">
        <ul style={{ color: "#FCD54C" }}>Buy </ul>
        <ul>Blog</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </div>
      <div className="next">
        <button className="book">Book a consultation</button>
        <div className="lang">
          <span style={{ color: "#FCD54C", paddingRight: "10px" }}>EN</span>
          <span className="rus">RU</span>
        </div>
        <span>+7 (212) 674-25-10</span>
      </div>
    </navbar>
  );
}

export default Navbar;
