import React from 'react';
import 'reactjs-popup/dist/index.css';
import logo from './logo.svg';
import './App.css';
import './component/MainScreenComponent/UpperPanel.css';
import './component/CommonComponent/Button/Buttons.css';
import './component/MainScreenComponent/LeftPanel.css';
import Modal from './component/CommonComponent/Modal/Modal';
import Menu from './component/CommonComponent/Menu/Menu';
import { LoginAction, LoginContent } from './Utils/UtilsForLogin';

function App() {
  return (
    <div className="App">
      <view className="UpperPanelStyle">
        <div style={{ background: 'rgba(0, 0, 0, 0);' }}>
          <Modal
            triggerButtonName="Login"
            triggerButtonStyle="ButtonLoginStyle"
            modalName="Login"
            RenderActions={<LoginAction />}
            RenderContent={<LoginContent />}
          />
        </div>
      </view>
      <header className="App-MainContent">
        <view className="LeftPanelStyle">
          <Menu name="Список команд" containSubMenu={['команда 1', 'команда 2', 'команда 3']} />
          <Menu name="Статистика" containSubMenu={['команда 1', 'команда 2', 'команда 3']} />
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
