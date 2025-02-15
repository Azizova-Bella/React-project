import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import dots from "../assets/dots.png";

export default function Section1() {
  return (
    <>
      <section>
        <div className="title">
          <h1>Latest projects</h1>
          <div className="uls">
            <ul style={{ color: "#FCD54C" }}>All</ul>
            <ul>Building</ul>
            <ul>Interior</ul>
            <ul>View all projects</ul>
          </div>
        </div>
        <div className="products">
          <div className="div" style={{ backgroundImage: `url(${pic1})` }}>
            <h2>Villas</h2>
          </div>
          <div className="divText" style={{ backgroundColor: "#FCD54C" }}>
            <div className="lorem">
              <h3>Dubai</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat molestie integer aliquam consectetur. Faucibus vitae
                dui massa tellus magna sit.
              </p>
              <h4>See project</h4>
            </div>
          </div>
          <div className="div" style={{ backgroundImage: `url(${pic2})` }}>
            <h2>Houses</h2>
          </div>
          <div className="div" style={{ backgroundImage: `url(${pic3})` }}>
            <h2>Villas</h2>
          </div>
        </div>
        <img className="dots" src={dots} alt="" />

        <div className="about">
          <h5 style={{ color: "#C7A943" }}>Our expertise</h5>
          <h1>"The best apartment in Dubai" we will find your dream</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta
            volutpat diam egestas ultrices. Phasellus tempus fringilla neque,
            nec viverra orci tristique vel. In efficitur vehicula magna, varius
            pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo
            finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis
            sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius
            varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et
            tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie
            urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec
            orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>
    </>
  );
}
