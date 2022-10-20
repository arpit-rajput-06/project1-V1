import React from "react";
import Images from "./Images/Screenshot_2022-10-17_101954-removebg-preview.png"

const Header = (props) => {
  return (
    <>
      <div className="App">
        <div className="Eden">
          {/* <h1>Eden</h1> */}
          <img src={Images} />
        </div>
        <div id="steps">
          {[1, 2, 3, 4].map((val, idx) => {
            return (
              <button
                id={val}
                className="step active"
                onClick={() => props.ComponentToOpen(val)}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
