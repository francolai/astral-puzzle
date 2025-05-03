function AstralPuzzleShowOddsCheckBox({ checked, onCheckBoxChange }) {
  return (
    <>
      <input
        type="checkbox"
        id="showOdds"
        name="showOdds"
        checked={checked}
        onChange={(e) => onCheckBoxChange(e)}
      />
      顯示機率
    </>
  );
}

export default AstralPuzzleShowOddsCheckBox;
