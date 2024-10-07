import { FC, ReactPortal, MouseEvent, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { BackDropStyled, ModalStyled } from './Modal.styled';

import { ModalProps } from './types';

const modalRootEl: Element = document.querySelector('#modal-root')!;

const Modal: FC<ModalProps> = ({ onClose, children }): ReactPortal => {
  const onKeydown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: MouseEvent): void => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return (): void => document.removeEventListener('keydown', onKeydown);
  });

  return createPortal(
    <BackDropStyled onClick={handleBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </BackDropStyled>,
    modalRootEl
  );
};

export default Modal;
