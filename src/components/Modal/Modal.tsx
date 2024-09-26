import { createPortal } from 'react-dom';

import { BackDropStyled, ModalStyled } from './Modal.styled';
import { useEffect } from 'react';

const modalRootEl = document.querySelector('#modal-root')!;

const Modal = ({ onClose, children }: any) => {
  const onKeydown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: any) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  return createPortal(
    <BackDropStyled onClick={handleBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </BackDropStyled>,
    modalRootEl
  );
};

export default Modal;
