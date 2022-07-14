import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import logo from './logo.svg';
import './App.css';
import './component/UpperPanel.css';
import './component/Button.css';

function App() {
  return (
    <div className="App">
      <view className="UpperPanelStyle">
        <button
          type="button"
          className="ButtonStyle"
          onClick={() => {
          }}
        >
          Button
        </button>
        <Popup trigger={<button type="button" className="ButtonStyle">popup Button</button>} position="bottom center">
          <div>Саня гей</div>
        </Popup>
      </view>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
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
      </header>
    </div>
  );
}

export default App;
