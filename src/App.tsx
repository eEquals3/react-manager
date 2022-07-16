import React from 'react';
/* import Popup from 'reactjs-popup'; */
import 'reactjs-popup/dist/index.css';
import logo from './logo.svg';
import './App.css';
import './component/MainScreenComponent/UpperPanel.css';
import './component/CommonComponent/Button/Buttons.css';
import './component/MainScreenComponent/LeftPanel.css';
import Modal from './component/CommonComponent/Modal/Modal';
import Menu from './component/CommonComponent/Menu/Menu';

function App() {
  return (
    <div className="App">
      <view className="UpperPanelStyle">
        <div style={{ background: 'rgba(0, 0, 0, 0);' }}>
          <Modal
            triggerButtonName="Login"
            triggerButtonStyle="ButtonLoginStyle"
            modalName="Login"
            filling={() => { console.log('ololo'); }}
          />
        </div>
      </view>
      <header className="App-MainContent">
        <view className="LeftPanelStyle">
          <Menu />
        </view>

        <view className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.tsx</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </view>
      </header>
    </div>
  );
}

export default App;
