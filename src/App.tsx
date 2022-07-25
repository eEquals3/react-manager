import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainScreen from "./screens/MainScreen/MainScreens";

const App = () => {
  return (
    <Router>
      <div>
        <h2>Simple navigation</h2>

        <ul>
          <li>
            <Link to="/mainScreen">Home Page</Link>
          </li>
          <li>
            <Link to="/about">Hello Page</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/mainScreen" element={<MainScreen />} />
          <Route path="/about" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
