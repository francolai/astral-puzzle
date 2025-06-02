import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import '../../styles/astral-puzzle-confirm-modal.css';
function AstralPuzzleConfirmModal({ open, handleClick }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={modalRef} className="astral-puzzle-confirm-modal">
      <p>抽到稀有物品，是否繼續？</p>
      <div className="astral-puzzle-confirm-modal-buttons">
        <button onClick={() => handleClick('yes')}>是</button>
        <button onClick={() => handleClick('no')}>否</button>
      </div>
    </dialog>,
    document.body
  );
}

export default AstralPuzzleConfirmModal;
