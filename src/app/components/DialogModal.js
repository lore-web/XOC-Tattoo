"use client";
import { MouseEvent, useEffect, useRef } from "react";
import { styled } from "styled-components";

const isClickInsideRectangle = (event, element) => {
  const rect = element.getBoundingClientRect();

  return (
    event.clientX > rect.left &&
    event.clientX < rect.right &&
    event.clientY > rect.top &&
    event.clientY < rect.buttom
  );
};

const DialogModal = ({ title, isOpened, onClose, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  return (
    <StyledDialog
      ref={ref}
      onCancel={onClose}
      onClick={(event) =>
        ref.current && !isClickInsideRectangle(event, ref.current) && onClose()
      }
      hidden
    >
      <h3>{title}</h3>
      {children}
      <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
    </StyledDialog>
  );
};

export default DialogModal;

const StyledDialog = styled.dialog`
  width: 80vw;
  height: 60vh;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 1rem;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  border: 1px solid #888;
  &::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ModalCloseButton = styled.button`
  border-radius: 50%;
  padding: 0.125rem;
`;
