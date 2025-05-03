function AstralPuzzleSameRowCheckBox({
  checked,
  onCheckBoxChange,
  onSelectChange,
  numRows,
}) {
  return (
    <>
      <input
        type="checkbox"
        id="sameRowDraw"
        name="sameRowDraw"
        checked={checked}
        onChange={(e) => onCheckBoxChange(e)}
      />
      第
      <select name="sameRowDraw" id="sameRowDraw" onChange={onSelectChange}>
        {Array(numRows)
          .fill(0)
          .map((row, index) => (
            <option value={index + 1} key={`row-${index}`}>
              {index + 1}
            </option>
          ))}
      </select>
      行煉金
    </>
  );
}

export default AstralPuzzleSameRowCheckBox;
