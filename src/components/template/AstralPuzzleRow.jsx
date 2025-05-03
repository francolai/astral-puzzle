import AstralPuzzleItem from './AstralPuzzleItem';
import '../../styles/astral-puzzle-row.css';

function AstralPuzzleRow({ prizes, drawnPrize, isHighlighted, showOdds }) {
  return (
    <div className={`astral-puzzle-row${isHighlighted ? ' highlighted' : ''}`}>
      {prizes.map((prize) => (
        <div className="astral-puzzle-cell" key={prize.name}>
          <div
            className={`astral-puzzle-item-container${
              drawnPrize === prize.name && isHighlighted ? ' selected' : ''
            }`}
          >
            <AstralPuzzleItem
              imageURL={prize.getPrizeDetails().imageURL}
              quality={prize.getPrizeDetails().quality}
            />
          </div>
          <div>{showOdds && `${prize.probability}%`} </div>
        </div>
      ))}
    </div>
  );
}

export default AstralPuzzleRow;
