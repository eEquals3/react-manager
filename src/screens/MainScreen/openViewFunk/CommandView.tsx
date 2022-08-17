import React, { memo, ReactElement, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { reduceCommand, setCurrentCommand } from "../../../redax/commandSlice";
import styled from "styled-components";
import Modal, {
  ModalRefHandle,
} from "../../../component/CommonComponent/Modal/Modal";
import "../../../component/CommonComponent/Modal/Modal.scss";

interface Prop {
  name: string;
}

/* const Button = styled.button`
  background: transparent;
  border-radius: 10px;
  position: absolute;
  top: 15%;
  bottom: 15%;
  right: -29%;
  cursor: pointer;
  font-size: 2.5vh;
  &:hover,
  &:active {
    color: #0993bd;
    background: radial-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2));
  }
`; */

const ModalText = styled.div`
  font-size: 2.5vh;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const ModalButton = styled.button`
  background: transparent;
  border-radius: 10px;
  border-color: transparent;
  font-size: 2vh;
  height: 4vh;
  &:hover,
  &:active {
    color: #0993bd;
    background: radial-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2));
  }
`;

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
          <ModalText>Вы действительно хотите это удалить?</ModalText>
        }
        renderActions={
          <ModalButton
            type="button"
            onClick={() => {
              dispatch(reduceCommand(name));
              dispatch(setCurrentCommand(""));
            }}
          >
            Удалить команду
          </ModalButton>
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
          /* dispatch(reduceCommand(name));
          dispatch(setCurrentCommand("")); */
        }}
      >
        Удалить команду
      </button>
      {ConfirmDeleteModal}
    </div>
  );
};

export default memo(CommandView);
