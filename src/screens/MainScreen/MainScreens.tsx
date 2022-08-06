import React, { useMemo, useRef, useState } from "react";
import "reactjs-popup/dist/index.css";
import logo from "./logo.svg";
import "./MaicScreenStyle.scss";
import "../../headerComponents/UpperPanel.scss";
import "./LeftPanel.scss";
import "../../component/CommonComponent/Button/Buttons.scss";
import Menu from "../../component/CommonComponent/Menu/Menu";
import CommandView from "./openViewFunk/OpenCommandView";
import Modal, {
  ModalRefHandle,
} from "../../component/CommonComponent/Modal/Modal";
import useModalContent from "../../component/CommonComponent/Menu/useModalContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redax/store";
import { setCurrentCommand } from "../../redax/commandSlice";

const MainScreen = () => {
  const dispatch = useDispatch();
  const modalRef = useRef<ModalRefHandle>(null);
  const [addButtonModalName, setAddButtonModalName] =
    useState<string>("Список команд");
  const { buttonModalName, renderText, renderCreateButton } = useModalContent({
    name: addButtonModalName,
  });
  const commands = useSelector((state: RootState) => state.commands);

  const createAddModal = useMemo(
    () => (
      <Modal
        ref={modalRef}
        modalName={`Новая ${buttonModalName(addButtonModalName)}`}
        triggerButtonName={null}
        renderContent={renderText}
        renderActions={renderCreateButton}
      />
    ),
    [renderText, renderCreateButton]
  );

  return (
    <div className="MainScreen">
      <view className="MainScreen-MainContent">
        <view className="LeftPanelStyle">
          <img src={logo} className="MainScreen-logo" alt="logo" />
          <Menu
            name="Список команд"
            containSubMenu={commands.commands}
            onCommandChange={(commandId) => {
              console.log("commandId", commandId);
              dispatch(setCurrentCommand(commandId));
            }}
            onPlusBtnPressed={() => {
              modalRef.current?.open();
              setAddButtonModalName("Список команд");
            }}
          />
          <Menu
            name="Статистика"
            containSubMenu={commands.commands}
            onCommandChange={(commandId) => {
              console.log("commandId", commandId);
              dispatch(setCurrentCommand(commandId));
            }}
            onPlusBtnPressed={() => {
              modalRef.current?.open();
              setAddButtonModalName("Статистика");
            }}
          />
          <Menu
            name="Список задач"
            containSubMenu={["задача 1", "задача 2", "задача 3"]}
            onCommandChange={(taskId) => {
              console.log("taskId", taskId);
            }}
            onPlusBtnPressed={() => {
              modalRef.current?.open();
              setAddButtonModalName("Список задач");
            }}
          />
        </view>
        {createAddModal}

        <view className="MainScreen-header">
          <CommandView />
        </view>
      </view>
    </div>
  );
};

export default MainScreen;
