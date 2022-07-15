import React, { memo, useCallback, useState } from 'react';
import Popup from 'reactjs-popup';
import './Modal.css';
import './Button.css';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button type="button" className="ButtonStyle" onClick={() => { setIsOpen(true); }}> Open Modal </button>

      <Popup
        open={isOpen}
        modal
        nested
        onClose={closeModal}
      >
        <div className="modal">
          <button
            type="button"
            className="close"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="header"> Modal Title </div>
          <div className="content">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          </div>
          <div className="actions">
            <Popup
              trigger={<button type="button" className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
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
