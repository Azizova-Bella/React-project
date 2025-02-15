import React from "react";
import back3 from "../assets/back3.png";
import btn from "../assets/btn.png";
import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";

function Section2() {
  return (
    <>
      <section>
        <div className="back3" style={{ backgroundImage: `url(${back3})` }}>
          <div className="btn">
            <img src={btn} alt="" />
          </div>
        </div>
        <div className="dont">
          <span>
            “Don’t limit yourself. Many people limit themselves to what they
            think they can do. You can go as far as your mind lets you. What you
            believe, remember, you can achieve.”{" "}
          </span>{" "}
          <span style={{ color: "yellow" }}>— Mary Kay Ash</span>
        </div>
        <div className="main">
          <div className="room">
            <img src={room1} alt="" />
            <p>
              Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
              Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
              purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
              aliquet purus, sit amet pellentesque neque est id tortor. In
              egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
              pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam
              pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam
              mattis justo consequat risus. Donec imperdiet enim id efficitur
              pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis
              nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam
              viverra ultrices est vitae suscipit. Pellentesque elementum purus
              non nisl pharetra consequat. Nunc in venenatis orci.
            </p>
          </div>
          <div className="room">
            <img src={room2} alt="" />
            <p>
              Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
              Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
              purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
              aliquet purus, sit amet pellentesque neque est id tortor. In
              egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
              pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam
              pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam
              mattis justo consequat risus. Donec imperdiet enim id efficitur
              pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis
              nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam
              viverra ultrices est vitae suscipit. Pellentesque elementum purus
              non nisl pharetra consequat. Nunc in venenatis orci.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
