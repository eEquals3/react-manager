import React, {
  memo, ReactElement, useCallback, /* useEffect, */ useMemo, useState,
} from 'react';
import Popup from 'reactjs-popup';
import './Modal.css';
import '../Button/Buttons.css';

interface Props {
  triggerButtonName: string;
  triggerButtonStyle: string;
  modalName:string
  RenderContent: ReactElement;
  RenderActions: ReactElement;
/*  someFn: ()=>void; */
}

const contentStyle = { background: 'transparent', border: 'none' };

function Modal({
  triggerButtonName,
  triggerButtonStyle,
  modalName,
  RenderContent,
  RenderActions,
/*  someFn, */
}: Props):ReactElement {
  const [isOpen, setIsOpen] = useState(false);
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

  const renderSomeComp = useMemo(() => (
    <button
      type="button"
      className="menu-subMenuButtons"
      onClick={() => {
        /* setSt('kjfhukdhg'); */
        /* someFn('kjfhukdhg'); */
      }}
    >
      {' '}
      a
    </button>
  ), [1, 2, 3, 4, 5]);

  return (
    <>
      <button
        type="button"
        className={triggerButtonStyle}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {triggerButtonName}
      </button>

      <Popup
        open={isOpen}
        modal
        nested
        onClose={closeModal}
        contentStyle={contentStyle}
      >
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
            { RenderContent }
            { renderSomeComp }
          </div>
          <div className="actions">
            { RenderActions }
            <button
              type="button"
              className="button"
              onClick={closeModal}
            >
              close modal
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default memo(Modal);
