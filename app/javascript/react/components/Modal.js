import React from 'react'

const Modal = props => {
  return (
    <div className="whatever-modal">
      <section className="whatever-modal-main">
        <button onClick={props.handleClose} className="close-button" aria-label="Close reveal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
        <h3>Title</h3>
        <hr />
        <div className="whatever-modal-contents text-middle">
          {props.children}
        </div>
      </section>
    </div>
  );
};

export default Modal
