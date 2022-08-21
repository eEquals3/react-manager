import React, { memo, ReactElement, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { reduceCommand, setCurrentCommand } from "../../../redax/commandSlice";
/* import styled from "styled-components"; */
import Modal, {
  ModalRefHandle,
} from "../../../component/CommonComponent/Modal/Modal";
import "../../../component/CommonComponent/Modal/Modal.scss";
import "../modalStyle.scss";
import "../../../component/CommonComponent/Button/Buttons.scss";

interface Prop {
  name: string;
}

const CommandView = ({ name }: Prop): ReactElement => {
  const dispatch = useDispatch();
  const modalRef = useRef<ModalRefHandle>(null);
  const ConfirmDeleteModal = useMemo(
    () => (
      <Modal
        ref={modalRef}
        triggerButtonName={null}
        modalName="Подтверждение"
        renderContent={
          <div id="modalContent">Вы действительно хотите это удалить?</div>
        }
        renderActions={
          <div id="modalAction">
            <button
              className="ButtonStyle"
              type="button"
              onClick={() => {
                dispatch(reduceCommand(name));
                dispatch(setCurrentCommand(""));
              }}
            >
              Удалить команду
            </button>
          </div>
        }
      />
    ),
    [name]
  );

  return (
    <div id="viewHeader" className="box-shadow">
      {name}
      <button
        type="button"
        onClick={() => {
          modalRef.current?.open();
        }}
      >
        Удалить команду
      </button>
      {ConfirmDeleteModal}
    </div>
  );
};

export default memo(CommandView);
