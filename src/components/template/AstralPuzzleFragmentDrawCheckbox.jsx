function AstralPuzzleFragmentDrawCheckBox({
  checked,
  onCheckBoxChange,
  numFragments,
  disabled,
}) {
  return (
    <>
      <input
        type="checkbox"
        id="fragmentDraw"
        name="fragmentDraw"
        checked={checked}
        onChange={(e) => onCheckBoxChange(e)}
        disabled={disabled}
      />
      使用星界碎塊({numFragments})
    </>
  );
}

export default AstralPuzzleFragmentDrawCheckBox;
