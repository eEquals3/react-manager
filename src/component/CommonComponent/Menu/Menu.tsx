import React, { ReactElement, useCallback, useMemo } from 'react';
import Popup from 'reactjs-popup';
import AddButton from './AddButton';
import './Menu.css';

interface Props{
    name: string;
    containSubMenu: string[];
}

function Menu({ name, containSubMenu }:Props):ReactElement {
  const AddSubMenuButton = useCallback((btnName: string) => (
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
      {containSubMenu.map((it) => (AddSubMenuButton(it)))}
      <AddButton name={name} />
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
        nested
      >
        {AddSubMenu}
      </Popup>
    </div>
  );
}

export default Menu;
