import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"

export default function Modal({ children, open, className = '', onClose, ...props }) {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose} {...props} >
      {children}
    </dialog>,
    document.getElementById('modal'));
}