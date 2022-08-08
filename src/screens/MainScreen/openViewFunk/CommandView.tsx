import React, { memo, ReactElement, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { reduceCommand, setCurrentCommand } from "../../../redax/commandSlice";
import styled from "styled-components";
import Modal, {
  ModalRefHandle,
} from "../../../component/CommonComponent/Modal/Modal";

interface Prop {
  name: string;
}

const Button = styled.button`
  border-radius: 10px;
  position: absolute;
  top: 15%;
  bottom: 15%;
  right: 1%;
  font-size: 2.5vh;
`;

const ModalText = styled.div`
  font-size: 2.5vh;
`;

const ModalButton = styled.button`
  border-radius: 10px;
  height: 2vw;
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
            удалить команду
          </ModalButton>
        }
      />
    ),
    []
  );

  return (
    <div className="viewHeader">
      {name}
      <Button
        type="button"
        onClick={() => {
          modalRef.current?.open();
          /* dispatch(reduceCommand(name));
          dispatch(setCurrentCommand("")); */
        }}
      >
        удалить команду
      </Button>
      {ConfirmDeleteModal}
    </div>
  );
};

export default memo(CommandView);
