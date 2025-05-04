import AstralPuzzleButton from './AstralPuzzleButton';
import AstralPuzzleDrawResult from './AstralPuzzleDrawResult';
import AstralPuzzleStorage from './AstralPuzzleStorage';
import AstralPuzzleRow from './AstralPuzzleRow';
import AstralPuzzleSameRowCheckBox from './AstralPuzzleSameRowCheckbox';
import AstralPuzzleShowOddsCheckBox from './AstralPuzzleShowOddsCheckBox';
import AstralPuzzleFragmentDrawCheckBox from './AstralPuzzleFragmentDrawCheckBox';

import { useState } from 'react';

import '../../styles/astral-puzzle-template.css';

function AstralPuzzleTemplate({ rows }) {
  const [prizeName, setPrizeName] = useState(null);
  const [currentRow, setCurrentRow] = useState(0);
  const [drawSameRow, setDrawSameRow] = useState({
    enabled: false,
    rowIndex: 0,
  });
  const [fragmentDraw, setFragmentDraw] = useState({
    enabled: false,
    numFragments: 0,
  });
  const [disableDraw, setDisableDraw] = useState(false);
  const [claimedItems, setClaimedItems] = useState({});
  const [showOdds, setShowOdds] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle the draw button click
  const handleDrawButtonClick = () => {
    if (drawSameRow.enabled) {
      handleSameRowDraw();
      return;
    }
    if (fragmentDraw.enabled && !isPlaying) {
      setFragmentDraw((prev) => {
        return { ...prev, numFragments: prev.numFragments - 5 };
      });
    }
    let drawRow = isPlaying
      ? rows.length - 2 - currentRow
      : rows.length - 1 - currentRow;
    const drawnPrize = rows[drawRow].drawPrize();
    setPrizeName(drawnPrize);
    if (
      drawnPrize === '星界碎塊' ||
      (isPlaying && currentRow + 1 === rows.length - 1)
    ) {
      setDisableDraw(true);
    }
    setCurrentRow((prevRow) => (isPlaying ? prevRow + 1 : prevRow));
    setIsPlaying(true);
  };

  // Function to handle the claim button click
  const handleClaim = () => {
    if (!prizeName) return;
    setClaimedItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[prizeName] =
        newItems[prizeName] !== undefined ? newItems[prizeName] + 1 : 1;
      return newItems;
    });
    setPrizeName(null);
    setDisableDraw(false);
    setCurrentRow(fragmentDraw.enabled ? 2 : 0);
    setIsPlaying(false);
    if (prizeName === '星界碎塊') {
      setFragmentDraw((prev) => {
        return { ...prev, numFragments: prev.numFragments + 1 };
      });
    }
    if (fragmentDraw.numFragments < 5) {
      setFragmentDraw((prev) => {
        return { ...prev, enabled: false };
      });
      setCurrentRow(0);
    }
  };

  // Helper function to handle when same row draw functionality is enabled.
  function handleSameRowDraw() {
    const rowIndex = drawSameRow.rowIndex;
    const drawnPrize = rows[rows.length - 1 - rowIndex].drawPrize();
    setPrizeName(drawnPrize);
    setClaimedItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[drawnPrize] =
        newItems[drawnPrize] !== undefined ? newItems[drawnPrize] + 1 : 1;
      return newItems;
    });
    if (prizeName === '星界碎塊') {
      setFragmentDraw((prev) => {
        return { ...prev, numFragments: prev.numFragments + 1 };
      });
    }
  }

  // Function to handle when the fragment draw functionality is toggled on or off.
  function handleToggleFragmentDraw(e) {
    setFragmentDraw((prev) => {
      if (e.target.checked) {
        setCurrentRow(2);
        return { ...prev, enabled: true };
      } else {
        setCurrentRow(0);
        return { ...prev, enabled: false };
      }
    });
  }

  // Function to handle when same row draw functionality is toggled on or off.
  const handleToggleSameRowDraw = (e) => {
    setPrizeName(null);
    setDisableDraw(false);
    setDrawSameRow((prev) => {
      if (e.target.checked) {
        setCurrentRow(prev.rowIndex);
      } else {
        setCurrentRow(0);
      }
      return { ...prev, enabled: e.target.checked };
    });
  };

  // Function to handle when the row is selected from the dropdown.
  const handleRowSelection = (e) => {
    if (drawSameRow.enabled) {
      setCurrentRow(e.target.value - 1);
    }
    setDrawSameRow((prev) => {
      return { ...prev, rowIndex: e.target.value - 1 };
    });
  };

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
            isHighlighted={index === rows.length - 1 - currentRow}
            showOdds={showOdds}
          />
        ))}
      </div>
      <div className="astral-puzzle-user-input">
        <div className="astral-puzzle-buttons">
          <AstralPuzzleButton
            onClick={handleDrawButtonClick}
            disabled={disableDraw}
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
            onCheckBoxChange={handleToggleSameRowDraw}
            onSelectChange={handleRowSelection}
            numRows={rows.length}
            disabled={fragmentDraw.enabled}
          />
        </div>
        <div className="astral-puzzle-checkbox2">
          <AstralPuzzleShowOddsCheckBox
            onCheckBoxChange={(e) => setShowOdds(e.target.checked)}
            checked={showOdds}
          />
        </div>
        <div className="astral-puzzle-checkbox3">
          <AstralPuzzleFragmentDrawCheckBox
            onCheckBoxChange={handleToggleFragmentDraw}
            checked={fragmentDraw.enabled}
            numFragments={fragmentDraw.numFragments}
            disabled={
              isPlaying || drawSameRow.enabled || fragmentDraw.numFragments < 5
            }
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
