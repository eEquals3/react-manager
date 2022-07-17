import React, {
  memo, ReactElement, useCallback, /* useEffect, */ useMemo, useState,
} from 'react';
import Popup from 'reactjs-popup';
import './Modal.css';
import '../Button/Buttons.css';

interface Props {
  triggerButtonName?: string;
  triggerButtonStyle?: string;
  modalName?:string
  renderContent: ReactElement;
  renderActions?: ReactElement;
  isAlert?:boolean;
/*  someFn: ()=>void; */
}

const contentStyle = { background: 'transparent', border: 'none', width: '25vw' };

function Modal({
  triggerButtonName = '123',
  triggerButtonStyle = '123',
  modalName = 'Alert',
  renderContent = <> A </>,
  renderActions = <> A </>,
  isAlert = false,
/*  someFn, */
}: Props):ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(isAlert);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    // fillingContent();
    // fillingActions();
  }, []);
  /*
  const [st, setSt] = useState<string>('');
*/

  /*
  useEffect(() => {
    someFn(st);
  }, [someFn, st]);
*/

  const renderModalButton = useMemo(() => (
    <button
      type="button"
      className={triggerButtonStyle}
      onClick={() => {
        setIsOpen(true);
      }}
    >
      {triggerButtonName}
    </button>
  ), [triggerButtonName]);

  const renderModalBody = useMemo(() => (
    <div className="modal">
      <button
        type="button"
        className="close"
        onClick={closeModal}
      >
        &times;
      </button>
      <div className="header">
        {modalName}
      </div>
      <div className="content">
        { renderContent }
      </div>
      <div className="actions">
        { renderActions }
      </div>
    </div>
  ), [renderContent, renderActions, modalName, closeModal]);

  return (
    <>
      {renderModalButton}

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
}

export default memo(Modal);
