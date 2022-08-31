import React, { memo, ReactElement, useCallback, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { reduceCommand, setCurrentCommand } from "../../../redax/commandSlice";
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
  const onDeleteClick = useCallback(() => {
    dispatch(reduceCommand(name));
    dispatch(setCurrentCommand(""));
  }, []);
  const onClickOpenModal = useCallback(() => {
    modalRef.current?.open();
  }, []);

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
              onClick={onDeleteClick}
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
    <>
      <div id="viewHeader" className="box-shadow">
        {name}
        <button type="button" onClick={onClickOpenModal}>
          Удалить команду
        </button>
        {ConfirmDeleteModal}
      </div>
      <div className="CenterContent" />
    </>
  );
};

export default memo(CommandView);
