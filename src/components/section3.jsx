import React from "react";
import back4 from "../assets/back4.png";

export default function Section3() {
  return (
    <>
      <div className="contact" style={{ backgroundImage: `url(${back4})` }}>
        <div className="phone">
          <h4>Do you have any questions?</h4>
          <h1>Contact us</h1>
          <div className="inp">
            <input type="text" placeholder="Enter your mail" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
