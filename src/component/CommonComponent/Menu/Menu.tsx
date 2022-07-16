import React from 'react';
import Popup from 'reactjs-popup';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <Popup
        trigger={<div className="menu-item"> Список команд  </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={150}
        mouseEnterDelay={50}
        contentStyle={{ padding: '0px' }}
        arrow={false}
      >
        <div className="menu">
          <div className="menu-item"> команда 1</div>
          <div className="menu-item"> команда 2</div>
          <div className="menu-item"> команда 3</div>
        </div>
      </Popup>
      <Popup
        trigger={<div className="menu-item"> Статистика </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={150}
        mouseEnterDelay={50}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        <div className="menu">
          <div className="menu-item"> команда 1</div>
          <div className="menu-item"> команда 2</div>
          <div className="menu-item"> команда 3</div>
        </div>

      </Popup>
    </div>
  );
}
export default Menu;
