import React from 'react';
import Popup from 'reactjs-popup';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <Popup
        trigger={<div className="menu-mainManu"> Список команд  </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={150}
        mouseEnterDelay={50}
        contentStyle={{ padding: '0px', border: 'none', background: 'transparent' }}
        arrow={false}
      >
        <div className="menu-subMenu">
          <button type="button" className="menu-item"> команда 1</button>
          <button type="button" className="menu-item"> команда 2</button>
          <button type="button" className="menu-item"> команда 3</button>
        </div>
      </Popup>
      <Popup
        trigger={<div className="menu-mainManu"> Статистика </div>}
        position="right center"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={150}
        mouseEnterDelay={50}
        contentStyle={{ padding: '0px', border: 'none', background: 'transparent' }}
        arrow={false}
      >
        <div className="menu-subMenu">
          <div className="menu-item"> команда 1</div>
          <div className="menu-item"> команда 2</div>
          <div className="menu-item"> команда 3</div>
        </div>

      </Popup>
    </div>
  );
}
export default Menu;
