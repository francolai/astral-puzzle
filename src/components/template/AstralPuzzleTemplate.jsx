import AstralPuzzleButton from './AstralPuzzleButton';
import AstralPuzzleDrawResult from './AstralPuzzleDrawResult';
import AstralPuzzleStorage from './AstralPuzzleStorage';
import AstralPuzzleRow from './AstralPuzzleRow';
import AstralPuzzleSameRowCheckBox from './AstralPuzzleSameRowCheckbox';

import { useState } from 'react';

import '../../styles/astral-puzzle-template.css';
import AstralPuzzleShowOddsCheckBox from './AstralPuzzleShowOddsCheckBox';

function AstralPuzzleTemplate({ rows }) {
  const [prizeName, setPrizeName] = useState(null);
  const [currentRow, setCurrentRow] = useState(0);
  const [drawSameRow, setDrawSameRow] = useState({
    enabled: false,
    rowIndex: 0,
  });
  const [isOver, setisOver] = useState(false);
  const [claimedItems, setClaimedItems] = useState({});
  const [showOdds, setShowOdds] = useState(false);

  // Function to handle the draw button click
  const handleDraw = () => {
    const drawnPrize = rows[rows.length - 1 - currentRow].drawPrize();
    setPrizeName(drawnPrize);
    if (drawnPrize === '星界碎塊') {
      setisOver(true);
    }
    setCurrentRow((prevRow) => prevRow + 1);
  };

  // Function to handle the claim button click
  const handleClaim = () => {
    if (!prizeName) return;
    setClaimedItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[prizeName] = newItems[prizeName] ? newItems[prizeName] + 1 : 1;
      return newItems;
    });
    setPrizeName(null);
    setisOver(false);
    setCurrentRow(0);
  };

  // Function to handle when same row draw functionality is enabled.
  function handleSameRowDraw() {
    const rowIndex = drawSameRow.rowIndex;
    const drawnPrize = rows[rows.length - 1 - rowIndex].drawPrize();
    setPrizeName(drawnPrize);
    setClaimedItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[drawnPrize] = newItems[drawnPrize]
        ? newItems[drawnPrize] + 1
        : 1;
      return newItems;
    });
  }
  // Function to reset the storage
  const resetStorage = () => {
    setClaimedItems({});
  };
  return (
    <>
      <div className="astral-puzzle">
        {rows.map((row, index) => (
          <AstralPuzzleRow
            prizes={row.prizes}
            key={`row-${index}`}
            drawnPrize={prizeName}
            isHighlighted={index === rows.length - currentRow}
            showOdds={showOdds}
          />
        ))}
      </div>
      <div className="astral-puzzle-user-input">
        <div className="astral-puzzle-buttons">
          <AstralPuzzleButton
            onClick={drawSameRow.enabled ? handleSameRowDraw : handleDraw}
            disabled={
              isOver || (currentRow === rows.length && !drawSameRow.enabled)
            }
          >
            煉金
          </AstralPuzzleButton>
          <AstralPuzzleButton
            onClick={handleClaim}
            disabled={prizeName === null || drawSameRow.enabled}
          >
            領取
          </AstralPuzzleButton>
        </div>
        <div className="astral-puzzle-checkbox1">
          <AstralPuzzleSameRowCheckBox
            checked={drawSameRow.enabled}
            onCheckBoxChange={(e) => {
              setPrizeName(null);
              setisOver(false);
              setDrawSameRow((prev) => {
                if (e.target.checked) {
                  setCurrentRow(prev.rowIndex + 1);
                } else {
                  setCurrentRow(0);
                }
                return { ...prev, enabled: e.target.checked };
              });
            }}
            onSelectChange={(e) => {
              setDrawSameRow((prev) => {
                if (prev.enabled) {
                  setCurrentRow(e.target.value);
                }
                return { ...prev, rowIndex: e.target.value - 1 };
              });
            }}
            numRows={rows.length}
          />
        </div>
        <div className="astral-puzzle-checkbox2">
          <AstralPuzzleShowOddsCheckBox
            onCheckBoxChange={(e) => setShowOdds(e.target.checked)}
            checked={showOdds}
          />
        </div>
      </div>

      <div className="astral-puzzle-results">
        <AstralPuzzleDrawResult drawnPrize={prizeName} />

        <AstralPuzzleStorage claimedItems={claimedItems} />
        {Object.keys(claimedItems).length > 0 && (
          <AstralPuzzleButton onClick={resetStorage}>
            重置獎品庫
          </AstralPuzzleButton>
        )}
      </div>
    </>
  );
}

export default AstralPuzzleTemplate;
