import React from "react";
import logo from "../assets/Logo.png";
import socials from "../assets/socials.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="logotip">
          <img src={logo} alt="" />
        </div>
        <div className="footer-contenier">
          <div className="buy">
            <h3>Buy</h3>
            <p>Apartment in Dubai</p>
            <p>House in Dubai</p>
            <p>Apartments in Dubai</p>
            <p>Loft in Dubai</p>
            <p>Penthouse in Dubai</p>
            <p>Villa in Dubai</p>
          </div>
          <div className="buy">
            <h3>Services</h3>
            <p>Property management in Dubai, UAE</p>
            <p>Sell ​​property in Dubai, UAE</p>
            <p>Rent property in Dubai, UAE</p>
            <p>Investments in Dubai, UAE</p>
            <p>Real estate for cryptocurrency in Dubai</p>
            <p>Moving to Dubai, UAE</p>
          </div>
          <div className="buy">
            <h3>Information</h3>
            <p>Video</p>
            <p>Podcasts</p>
            <p>Laws</p>
            <p>Questions and answers</p>
            <p>Books</p>
            <p>Articles</p>
          </div>
          <div className="buy">
            <h3>About company</h3>
            <p>Jobs </p>
            <p>Story</p>
            <p>Licenses</p>
            <p>Why are we</p>
            <p>Real estate agency</p>
          </div>
          <div className="buy">
            <h3>Contact </h3>
            <p>
              964 Worthington Drive <br /> <br />
              Dubai, UAE{" "}
            </p>
            <p>dubairealty@mail.com</p>
            <button className="book">Book a consultation</button>
          </div>
        </div>
        <div className="footer-info">
            <p>Copyright © 2022 Dubai Realty</p>
            <img src={socials} alt="" />
        </div>
      </footer>
    </>
  );
}
