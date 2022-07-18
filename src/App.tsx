import React from 'react';
import 'reactjs-popup/dist/index.css';
import logo from './logo.svg';
import './App.css';
import './component/MainScreenComponent/UpperPanel.css';
import './component/CommonComponent/Button/Buttons.css';
import './component/MainScreenComponent/LeftPanel.css';
/* import Modal from './component/CommonComponent/Modal/Modal'; */
import Menu from './component/CommonComponent/Menu/Menu';
import { LoginModal } from './Utils/LoginModal';

function App() {
  return (
    <div className="App">
      <view className="UpperPanelStyle">
        <div style={{ background: 'rgba(0, 0, 0, 0)' }}>
          <LoginModal />
        </div>
      </view>
      <header className="App-MainContent">
        <view className="LeftPanelStyle">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu name="Список команд" containSubMenu={['команда 1', 'команда 2', 'команда 3']} />
          <Menu name="Статистика" containSubMenu={['команда 1', 'команда 2', 'команда 3']} />
          <Menu name="Список задач" containSubMenu={['задача 1', 'задача 2', 'задача 3']} />
        </view>

        <view className="App-header">
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
