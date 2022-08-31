import React, { ReactElement, useCallback, useMemo, useRef } from "react";
import Popup from "reactjs-popup";
// eslint-disable-next-line import/no-unresolved
import { PopupActions } from "reactjs-popup/dist/types";
/* import AddButton from './AddButton'; */
import "./Menu.scss";

interface Props {
  name: string;
  containSubMenu: string[];
  // eslint-disable-next-line no-unused-vars
  onCommandChange: (id: string) => void;
  onPlusBtnPressed: () => void;
}

const ContentStyle = {
  padding: "0px",
  borderRadius: "10px",
  border: "none",
  background: "transparent",
  boxShadow: "none",
};

const Menu = ({
  name,
  containSubMenu,
  onCommandChange,
  onPlusBtnPressed,
}: Props): ReactElement => {
  const ref = useRef<PopupActions>(null);

  const buttonFunc = useCallback(
    (btnName: string) => {
      onCommandChange(btnName);
    },
    [onCommandChange]
  );

  const onPlusPress = useCallback(() => {
    onPlusBtnPressed();
  }, [onPlusBtnPressed]);

  const SubMenuButton = useCallback(
    (btnName: string) => (
      <button
        type="button"
        className="menu-subMenuButtons"
        onClick={() => {
          buttonFunc(btnName);
          ref.current?.close();
        }}
      >
        {btnName}
      </button>
    ),
    []
  );

  const AddSubMenu = useMemo(
    () => (
      <div className="menu-subMenu">
        {containSubMenu.map((it) => SubMenuButton(it))}
        <button
          type="button"
          className="menu-subMenuButtons"
          onClick={onPlusPress}
        >
          +
        </button>
      </div>
    ),
    [containSubMenu]
  );

  return (
    <div className="menu">
      <Popup
        ref={ref}
        trigger={<div className="menu-mainMenu">{name}</div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={150}
        mouseEnterDelay={50}
        contentStyle={ContentStyle}
        arrow={false}
        nested
      >
        {AddSubMenu}
      </Popup>
    </div>
  );
};

export default Menu;
