import React, { useCallback, useMemo, useRef, useState } from "react";
import "reactjs-popup/dist/index.css";
import logo from "./logo.svg";
import "./MaicScreenStyle.scss";
import "../../headerComponents/UpperPanel.scss";
import "../../component/CommonComponent/Button/Buttons.scss";
import "../../component/CommonComponent/Menu/Menu.scss";
import Menu from "../../component/CommonComponent/Menu/Menu";
import FillerController from "./openViewFunk/MainComponentController";
import Modal, {
  ModalRefHandle,
} from "../../component/CommonComponent/Modal/Modal";
import useModalContent from "./useModalContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrentCommand } from "../../redux/commandSlice";
import { currentCommandSelector } from "../../redux/selectors";
import { setCurrentWinType } from "../../redux/utilitySlice";

const MainScreen = () => {
  const dispatch = useDispatch();
  const modalRef = useRef<ModalRefHandle>(null);
  const [addButtonModalName, setAddButtonModalName] =
    useState<string>("Список команд");
  const { buttonModalName, renderText, renderCreateButton } = useModalContent({
    name: addButtonModalName,
    ref: modalRef,
  });
  const commands = useSelector((state: RootState) => state.commands.commands);
  const currentCommand = useSelector(currentCommandSelector);

  const onCommandChangeCommands = useCallback((commandId: string) => {
    console.log("commandId", commandId);
    dispatch(setCurrentCommand(commandId));
    dispatch(setCurrentWinType("command"));
  }, []);

  const onCommandChangeStatistic = useCallback((commandId: string) => {
    console.log("commandId", commandId);
    dispatch(setCurrentCommand(commandId));
    dispatch(setCurrentWinType("statistic"));
  }, []);

  const onTaskButtonPressed = useCallback(() => {
    console.log("task");
    dispatch(setCurrentWinType("task"));
  }, []);

  const onCommandsPlusBtnPressed = useCallback(() => {
    modalRef.current?.open();
    setAddButtonModalName("Список команд");
  }, []);

  const onStatisticPlusBtnPressed = useCallback(() => {
    modalRef.current?.open();
    setAddButtonModalName("Статистика");
  }, []);

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
    <div className="MainScreen-MainContent">
      <div className="NavigatePanelStyle">
        <img src={logo} className="MainScreen-logo" alt="logo" />
        <Menu
          name="Список команд"
          containSubMenu={commands}
          onCommandChange={onCommandChangeCommands}
          onPlusBtnPressed={onCommandsPlusBtnPressed}
        />
        <Menu
          name="Статистика"
          containSubMenu={commands}
          onCommandChange={onCommandChangeStatistic}
          onPlusBtnPressed={onStatisticPlusBtnPressed}
        />
        <button
          type="button"
          className="menu-ButtonStyleLikeMenu"
          onClick={onTaskButtonPressed}
        >
          Список задач
        </button>
      </div>
      {createAddModal}

      <view className="MainScreen-centerContent">
        <FillerController commandName={currentCommand} />
      </view>
    </div>
  );
};

export default MainScreen;
