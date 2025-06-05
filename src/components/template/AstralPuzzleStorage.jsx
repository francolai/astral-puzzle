function AstralPuzzleStorage({ claimedItems }) {
  const items = [];
  let totalItems = 0;

  for (const [item, quantity] of Object.entries(claimedItems)) {
    items.push(
      <p key={item}>
        {item} x<b>{quantity}</b>
      </p>
    );
    totalItems += quantity;
  }

  return (
    <div className="astral-puzzle-storage">
      <h2>獎品庫 (共 {totalItems} 抽)</h2>
      <div>{items}</div>
    </div>
  );
}

export default AstralPuzzleStorage;
