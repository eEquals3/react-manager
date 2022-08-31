import React, { memo, useCallback, useRef } from "react";
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
import LoginModal, {
  LoginModalRefType,
} from "./headerComponents/loginModal/LoginModal";
import RegisterModal, {
  RegisterModalRefType,
} from "./headerComponents/loginModal/RegisterModal";
import HelloScreen from "./screens/HelloScreen/HelloScreen";
import "./App.scss";

const CustomBackground = () => {
  return (
    <>
      <div className="color" />
      <div className="color" />
      <div className="color" />
    </>
  );
};

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
  const loginModalRef = useRef<LoginModalRefType>(null);
  const registerModalRef = useRef<RegisterModalRefType>(null);
  /*   useEffect(
    () => console.log(loginModalRef, registerModalRef),
    [loginModalRef, registerModalRef]
  ); */

  const onRegisterPressed = useCallback(() => {
    loginModalRef.current?.hide();
    registerModalRef.current?.show();
  }, [loginModalRef, registerModalRef]);

  return (
    <Router>
      <div id="App">
        <div className="UpperPanelStyle">
          <div>
            <RegisterModal
              /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
              onRegisterPressed={(login: string, pass: string) => {
                // todo dispatch
              }}
              ref={registerModalRef}
            />
            <LoginModal
              onRegisterPressed={onRegisterPressed}
              /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
              onLoginPressed={(login: string, pass: string) => {
                // todo dispatch
              }}
              ref={loginModalRef}
            />
            <CustomLink to="/mainScreen">Home Page</CustomLink>
            <CustomLink to="/about">Hello Page</CustomLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HelloScreen />} />
          <Route path="about" element={<HelloScreen />} />
          <Route path="mainScreen" element={<MainScreen />} />
        </Routes>
        <CustomBackground />
      </div>
    </Router>
  );
};

export default memo(App);
