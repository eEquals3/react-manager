import React, { memo } from "react";
import styled from "styled-components";
import Modal from "../../component/CommonComponent/Modal/Modal";

const Content = styled.div`
  height: 82vh;
`;

const Header = styled.div`
  height: 10vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const HelloScreen = () => {
  return (
    <Content>
      <Header>Hello</Header>
      <div>
        hello
        <Modal
          triggerButtonName="Hello"
          renderContent={<div> hello </div>}
        ></Modal>
      </div>
    </Content>
  );
};

export default memo(HelloScreen);
