function AstralPuzzleButton({ onClick, disabled, children }) {
  return (
    <div className="astral-puzzle-button">
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}

export default AstralPuzzleButton;
