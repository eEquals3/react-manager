import React, { memo } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainScreen from "./screens/MainScreen/MainScreens";
/* import LoginModal from "../../headerComponents/loginModal/LoginModal"; */
import "./headerComponents/UpperPanel.scss";
import styled from "styled-components";
import LoginModal from "./headerComponents/loginModal/LoginModal";
import HelloScreen from "./screens/HelloScreen/HelloScreen";

const Button = styled.button`
  display: initial;
  height: 5vh;
  border-color: #0993bd;
  border-radius: 5px;
  margin: 1vh 2vw;
`;

const App = () => {
  return (
    <Router>
      <div>
        <view className="UpperPanelStyle">
          <div style={{ background: "rgba(0, 0, 0, 0)" }}>
            <LoginModal />
            <Button type="button">
              <Link to="/mainScreen">Home Page</Link>
            </Button>
            <Button type="button">
              <Link to="/about">Hello Page</Link>
            </Button>
          </div>
        </view>
        <Routes>
          <Route path="/mainScreen" element={<MainScreen />} />
          <Route path="/about" element={<HelloScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default memo(App);
