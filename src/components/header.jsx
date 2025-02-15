import React from "react";
import back1 from "../assets/back1.png";
import welcome from "../assets/welcome.png";
import icons from "../assets/icons.png";

function Header() {
  return (
    <>
     <div className="back1" style={{ backgroundImage: `url(${back1})`, position: 'relative' }}>
<div className="icons">

          <img src={icons} alt="" />
</div>
        <div className="img">
          <img src={welcome} alt="" />
        </div>
        <div className="numbers">
          <div className="all">
            <span className="yellow">PREV</span>|
            <span className="wheat">NEXT</span>
            <div className="boxes">
              <div className="num">
                <h1 className="h1 ac">01</h1>
              </div>
              <div className="info">
                <p className="wheat w-1">Lorem, ipsum.</p>
                <p className="wheat w-1">Dolorem apset</p>
              </div>
              <div className="num">
                <h1 className="h1">02</h1>
              </div>
              <div className="info">
                <p className="wheat w-1">Lorem, ipsum.</p>
                <p className="wheat w-1">Dolorem apset</p>
              </div>
              <div className="num">
                <h1 className="h1">03</h1>
              </div>
              <div className="info">
                <p className="wheat w-1">Lorem, ipsum.</p>
                <p className="wheat w-1">Dolorem apset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
