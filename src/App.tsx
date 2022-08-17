import React, { memo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  LinkProps,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import MainScreen from "./screens/MainScreen/MainScreens";
import "./headerComponents/UpperPanel.scss";
import LoginModal from "./headerComponents/loginModal/LoginModal";
import HelloScreen from "./screens/HelloScreen/HelloScreen";
import "./App.scss";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{
        textDecoration: match ? "underline" : "none",
        padding: "1vw 0vw",
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="UpperPanelStyle">
          <div>
            <LoginModal />
            <CustomLink to="/mainScreen">Home Page</CustomLink>
            <CustomLink to="/about">Hello Page</CustomLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HelloScreen />} />
          <Route path="about" element={<HelloScreen />} />
          <Route path="mainScreen" element={<MainScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default memo(App);
