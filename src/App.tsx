import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import logo from './logo.svg';
import './App.css';
import './component/UpperPanel.css';
import './component/Button.css';
import './component/LeftPanel.css';
import Modal from './component/Modal';

function App() {
  return (
    <div className="App">
      <view className="UpperPanelStyle">
        <Popup trigger={<button type="button" className="ButtonStyle"> Login </button>} modal>
          <span> Modal content </span>
        </Popup>
      </view>
      <header className="AppCenter">
        <view className="LeftPanelStyle">
          <Popup
            trigger={<button type="button" className="ButtonStyle"> jopa </button>}
            position="bottom center"
          >
            <div>Саня гей</div>
          </Popup>
          <Popup
            trigger={<button type="button" className="ButtonStyle"> jopa </button>}
            position="bottom center"
          >
            <div>Саня гей</div>
          </Popup>
          <Modal />
        </view>
        {/* <view className="App-header"> */}
        {/*   <img src={logo} className="App-logo" alt="logo" /> */}
        {/*   <p> */}
        {/*     Edit */}
        {/*     {' '} */}
        {/*     <code>src/App.tsx</code> */}
        {/*     {' '} */}
        {/*     and save to reload. */}
        {/*   </p> */}
        {/*   <a */}
        {/*     className="App-link" */}
        {/*     href="https://reactjs.org" */}
        {/*     target="_blank" */}
        {/*     rel="noopener noreferrer" */}
        {/*   > */}
        {/*     Learn React */}
        {/*   </a> */}
        {/* </view> */}
      </header>
    </div>
  );
}

export default App;
