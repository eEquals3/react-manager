import React, { memo } from "react";
import "./HelloScreen.scss";

const HelloScreen = () => {
  return (
    <div id="content">
      <h1>Hello</h1>
      <div>
        <p>hello there</p>
        <div>
          <h1>Contact us</h1>
          <i className="fa fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default memo(HelloScreen);
