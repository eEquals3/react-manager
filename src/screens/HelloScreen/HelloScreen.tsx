import React, { memo, useCallback } from "react";
import "./HelloScreen.scss";
import { GitIcon } from "../../component/CommonComponent/Icons/GitIcon";
import Modal from "../../component/CommonComponent/Modal/Modal";

const HelloScreen = () => {
  const onPress = useCallback(() => {
    window.open("https://github.com/eEquals3/react-manager");
  }, []);

  return (
    <div id="content">
      <h1>Hello</h1>
      <div>
        <p>
          hello there
          <Modal
            triggerButtonName="a"
            renderContent={<div> Hello </div>}
            modalName="Hello"
          />
        </p>
        <div>
          <h1>Contact us</h1>
          <div>
            <GitIcon size={30} onPress={onPress} />
            <GitIcon size={30} onPress={onPress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HelloScreen);
