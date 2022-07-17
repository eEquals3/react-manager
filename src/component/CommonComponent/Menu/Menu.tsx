import React, { ReactElement } from 'react';
import Popup from 'reactjs-popup';
import './Menu.css';

interface Props{
    name: string;
    containSubMenu: string[];
}

interface PropsAddSubMenu{
    containSubMenu: string[];
}

interface PropsAddButton{
    name: string
}

function AddButton({ name }: PropsAddButton):ReactElement {
  return (
    <button type="button" className="menu-subMenuButtons">
      {' '}
      { name }
      {' '}
    </button>
  );
}

function AddSubMenu({ containSubMenu }:PropsAddSubMenu):ReactElement {
  return (
    <div className="menu-subMenu">
      { containSubMenu.map((value) => AddButton({ name: value }))}
    </div>
  );
}

function Menu({ name, containSubMenu }:Props):ReactElement {
  const names = containSubMenu;
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
        {AddSubMenu({ containSubMenu: names })}
      </Popup>
    </div>
  );
}
export default Menu;
