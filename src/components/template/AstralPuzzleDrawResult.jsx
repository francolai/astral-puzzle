function AstralPuzzleDrawResult({ drawnPrize }) {
  return (
    <div className="astral-puzzle-draw-result">
      <h2>抽到的獎品</h2>
      <p>{drawnPrize ? drawnPrize : '無'}</p>
    </div>
  );
}

export default AstralPuzzleDrawResult;
