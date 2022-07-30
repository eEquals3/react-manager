import React, { memo } from "react";
import styled from "styled-components";

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
      <div>hello</div>
    </Content>
  );
};

export default memo(HelloScreen);
