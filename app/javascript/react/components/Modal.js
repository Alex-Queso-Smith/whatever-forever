import React from 'react'

const Modal = props => {
  var { price, title, dropTime } = props;
  var priceDiv, dropTimeDiv;

  if (price || dropTime) {
    priceDiv = <div className="modal-price">${props.price}</div>
    dropTimeDiv = <div className="modal-drop-date">{props.dropTime}</div>

  }

  return (
    <div className="whatever-modal">
      <section className="whatever-modal-main">
        <button onClick={props.handleClose} className="close-button" aria-label="Close reveal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
        {dropTimeDiv}
        <div className="modal-drop-title">{props.title}</div>
        {priceDiv}
        <hr />
        <div className="whatever-modal-contents text-middle">
          {props.children}
        </div>
      </section>
    </div>
  );
};

export default Modal
