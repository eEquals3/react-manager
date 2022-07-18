import React, { ReactElement, useCallback, useMemo } from 'react';
import Popup from 'reactjs-popup';
import './Menu.css';

interface Props{
    name: string;
    containSubMenu: string[];
}

function Menu({ name, containSubMenu }:Props):ReactElement {
  const AddButton = useCallback((btnName: string) => (
    <button
      type="button"
      className="menu-subMenuButtons"
      onClick={() => (console.log(btnName))}
    >
      {btnName}
    </button>
  ), []);

  const AddSubMenu = useMemo(() => (
    <div className="menu-subMenu">
      {containSubMenu.map((it) => (AddButton(it)))}

      <button
        type="button"
        className="menu-subMenuButtons"
        onClick={() => (console.log('+'))}
      >
        +
      </button>
    </div>
  ), [containSubMenu]);

  return (
    <div className="menu">
      <Popup
        trigger={(
          <div className="menu-mainMenu">
            {' '}
            { name }
            {' '}
          </div>
        )}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={150}
        mouseEnterDelay={50}
        contentStyle={{ padding: '0px', border: 'none', background: 'transparent' }}
        arrow={false}
      >
        {AddSubMenu}
      </Popup>
    </div>
  );
}
export default Menu;
