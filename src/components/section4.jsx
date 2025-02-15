import React from "react";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";


export default function Section4(){
    return (
        <>
        <section>

        <div className="useful">
            <h1>Useful articles</h1>
            <p>View all articles ▷ </p>
        </div>
        <div className="productss">
                  <div className="divs" style={{ backgroundImage: `url(${pic4})` }}>
                    <h2>Discover Architecture</h2>
                  </div>
                  <div className="divvText" style={{ backgroundColor: "#272727" }}>
                    <div className="lorems">
                      <h5>Jule 03, 2022</h5>
                     <h1>Discover Architecture</h1>
                      <p>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
                   <span>Learn more ▷</span>
                    </div>
                  </div>
                  <div className="divs" style={{ backgroundImage: `url(${pic5})` }}>
                    <h2>Discover Architecture</h2>
                  </div>
                
                </div>
        </section>

        </>
    )
}