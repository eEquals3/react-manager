import React, { memo } from "react";
import "./HelloScreen.scss";
import { GitIcon } from "../../component/CommonComponent/Icons/GitIcon";

const HelloScreen = () => {
  return (
    <div id="content">
      <h1>Hello</h1>
      <div>
        <p>hello there</p>
        <div>
          <h1>Contact us</h1>
          <GitIcon
            size={30}
            onPress={() => window.open("https://github.com/eEquals3")}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(HelloScreen);
