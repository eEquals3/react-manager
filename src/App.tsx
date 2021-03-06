import React, { useMemo, useRef, useState } from 'react';
import 'reactjs-popup/dist/index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  // eslint-disable-next-line no-unused-vars
  Route, Routes,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './component/MainScreenComponent/UpperPanel.css';
import './component/CommonComponent/Button/Buttons.css';
import './component/MainScreenComponent/LeftPanel.css';
import Menu from './component/CommonComponent/Menu/Menu';
import LoginModal from './Utils/LoginModal/LoginModal';
import CommandView from './Utils/OpenViewFunk/OpenCommandView';
import Modal, { ModalRefHandle } from './component/CommonComponent/Modal/Modal';
import useModalContent from './component/CommonComponent/Menu/useModalContent';
// eslint-disable-next-line no-unused-vars
import NotesListPage from './test';
// eslint-disable-next-line import/no-extraneous-dependencies

function App() {
  const modalRef = useRef<ModalRefHandle>(null);
  const [commandState, setCommSt] = useState<string>('команда 1');
  const [addButtonModalName, setAddButtonModalName] = useState<string>('Список команд');
  const {
    buttonModalName,
    renderText,
    renderCreateButton,
  } = useModalContent({ name: addButtonModalName });

  const createAddModal = useMemo(() => (
    <Modal
      ref={modalRef}
      modalName={`Новая ${buttonModalName(addButtonModalName)}`}
      triggerButtonName={null}
      renderContent={renderText}
      renderActions={renderCreateButton}
    />
  ), [renderText, renderCreateButton]);

  return (
    <div className="App">
      <view className="UpperPanelStyle">
        <div style={{ background: 'rgba(0, 0, 0, 0)' }}>
          <LoginModal />
        </div>
      </view>
      <view className="App-MainContent">
        <view className="LeftPanelStyle">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu
            name="Список команд"
            containSubMenu={['команда 1', 'команда 2', 'команда 3', 'команда 4']}
            onCommandChange={(commandId) => {
              console.log('commandId', commandId);
              setCommSt(commandId);
            }}
            onPlusBtnPressed={() => {
              modalRef.current?.open();
              setAddButtonModalName('Список команд');
            }}
          />
          <Menu
            name="Статистика"
            containSubMenu={['команда 1', 'команда 2', 'команда 3']}
            onCommandChange={(commandId) => {
              console.log('commandId', commandId);
              setCommSt(commandId);
            }}
            onPlusBtnPressed={() => {
              modalRef.current?.open();
              setAddButtonModalName('Статистика');
            }}
          />
          <Menu
            name="Список задач"
            containSubMenu={['задача 1', 'задача 2', 'задача 3']}
            onCommandChange={(taskId) => {
              console.log('taskId', taskId);
            }}
            onPlusBtnPressed={() => {
              modalRef.current?.open();
              setAddButtonModalName('Список задач');
            }}
          />
        </view>
        {createAddModal}

        <view className="App-header">
          <CommandView name={commandState} />
          {/* <h3> */}
          {/*   <Router> */}
          {/*     <Routes> */}
          {/*       <Route path="/" element={<NotesListPage />} /> */}
          {/*     </Routes> */}
          {/*   </Router> */}
          {/* </h3> */}
        </view>
      </view>
    </div>
  );
}

export default App;
