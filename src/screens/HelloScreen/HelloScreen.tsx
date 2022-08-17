import React, { memo } from "react";
import "./HelloScreen.scss";

const HelloScreen = () => {
  return (
    <div id="content">
      <h1>Hello</h1>
      <div>hello there</div>
    </div>
  );
};

export default memo(HelloScreen);
