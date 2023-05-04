import React, { PropsWithChildren } from "react";

interface ModalProps {
  active: boolean;
  title: string;
  onClose: () => void;
  onClickClear: () => void;
}

const Modal = ({
  active,
  title,
  onClose,
  children,
  onClickClear,
}: PropsWithChildren<ModalProps>) => {
  if (!active) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal__header">
          <div className="modal__title">{title}</div>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <a onClick={onClickClear} href="##" className="modal__button btn">
            Confirm
          </a>
          <a href="##" onClick={onClose} className="modal__button btn">
            Сancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
