import React, {
  forwardRef,
  ReactElement,
  useCallback,
  useImperativeHandle,
  /* useEffect, */ useMemo,
  useState,
} from "react";
import Popup from "reactjs-popup";
import "./Modal.scss";
import "../Button/Buttons.scss";

interface Props {
  triggerButtonName: string | null;
  triggerButtonStyle?: string;
  modalName?: string;
  renderContent?: ReactElement;
  renderActions?: ReactElement;
  /*  someFn: ()=>void; */
}

export interface ModalRefHandle {
  open: () => void;
  close: () => void;
}

const contentStyle = {
  background: "transparent",
  border: "none",
  width: "25vw",
};

const alertButtonContainerStyle = {
  justifyContent: "center",
};

const Modal: React.ForwardRefRenderFunction<ModalRefHandle, Props> = (
  {
    triggerButtonName = null,
    triggerButtonStyle = "ButtonStyle",
    modalName = "Alert",
    renderContent,
    renderActions,
  }: Props,
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
    },
  }));

  const renderModalButton = useMemo(
    () => (
      <button
        type="button"
        className={triggerButtonStyle}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {triggerButtonName}
      </button>
    ),
    [triggerButtonName]
  );

  const renderAlertAction = useMemo(
    () => (
      <div className="actions" style={alertButtonContainerStyle}>
        <button type="button" className="ButtonStyle" onClick={closeModal}>
          Ok
        </button>
      </div>
    ),
    []
  );

  const renderModalBody = useMemo(
    () => (
      <div className="modal">
        <button type="button" className="close" onClick={closeModal}>
          &times;
        </button>
        <div className="header">{modalName}</div>
        <div className="content">{renderContent}</div>
        {renderActions ? (
          <div className="actions">{renderActions}</div>
        ) : (
          renderAlertAction
        )}
      </div>
    ),
    [renderContent, renderActions, modalName, closeModal]
  );

  return (
    <>
      {triggerButtonName !== null && renderModalButton}

      <Popup
        open={isOpen}
        modal
        nested
        onClose={closeModal}
        contentStyle={contentStyle}
      >
        {renderModalBody}
      </Popup>
    </>
  );
};

export default forwardRef(Modal);
