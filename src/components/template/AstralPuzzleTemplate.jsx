import AstralPuzzleButton from './AstralPuzzleButton';
import AstralPuzzleDrawResult from './AstralPuzzleDrawResult';
import AstralPuzzleStorage from './AstralPuzzleStorage';
import AstralPuzzleRow from './AstralPuzzleRow';
import AstralPuzzleSameRowCheckBox from './AstralPuzzleSameRowCheckBox';
import AstralPuzzleShowOddsCheckBox from './AstralPuzzleShowOddsCheckBox';
import AstralPuzzleFragmentDrawCheckBox from './AstralPuzzleFragmentDrawCheckBox';

import { useState } from 'react';

import '../../styles/astral-puzzle-template.css';
import AstralPuzzleConfirmModal from './AstralPuzzleConfirmModal';

function AstralPuzzleTemplate({ rows }) {
  const [drawnPrize, setDrawnPrize] = useState({
    name: null,
    quantity: 0,
    probability: 0,
  });
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
  const [showOdds, setShowOdds] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRareItemDrawn, setIsRareItemDrawn] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Function to handle the draw button click
  const handleDrawButtonClick = () => {
    if (drawSameRow.enabled) {
      handleSameRowDraw();
      return;
    }
    if (isRareItemDrawn) {
      setShowConfirmModal(true);
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
    setDrawnPrize(drawnPrize);
    if (
      drawnPrize.name === '星界碎塊' ||
      (isPlaying && currentRow + 1 === rows.length - 1)
    ) {
      setDisableDraw(true);
    }
    if (drawnPrize.probability <= 1) {
      setIsRareItemDrawn(true);
    }
    setCurrentRow((prevRow) => (isPlaying ? prevRow + 1 : prevRow));
    setIsPlaying(true);
  };

  // Function to handle the claim button click
  const handleClaim = () => {
    if (!drawnPrize.name) return;
    setClaimedItems((prevItems) => {
      const newItems = { ...prevItems };
      const quantifiedName =
        drawnPrize.quantity > 1
          ? `${drawnPrize.name}x${drawnPrize.quantity}`
          : drawnPrize.name;
      newItems[quantifiedName] =
        newItems[quantifiedName] !== undefined
          ? newItems[quantifiedName] + 1
          : 1;
      return newItems;
    });
    setDrawnPrize({ name: null, quantity: 0, probability: 0 });
    setDisableDraw(false);
    setCurrentRow(fragmentDraw.enabled ? 2 : 0);
    setIsPlaying(false);
    setIsRareItemDrawn(false);
    if (drawnPrize.name === '星界碎塊') {
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
    setDrawnPrize(drawnPrize);
    setClaimedItems((prevItems) => {
      const newItems = { ...prevItems };
      const quantifiedName =
        drawnPrize.quantity > 1
          ? `${drawnPrize.name}x${drawnPrize.quantity}`
          : drawnPrize.name;
      newItems[quantifiedName] =
        newItems[quantifiedName] !== undefined
          ? newItems[quantifiedName] + 1
          : 1;
      return newItems;
    });
    if (drawnPrize.name === '星界碎塊') {
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
    setDrawnPrize({ name: null, quantity: 0, probability: 0 });
    setDisableDraw(false);
    setDrawSameRow((prev) => {
      if (e.target.checked) {
        setCurrentRow(prev.rowIndex);
        setIsPlaying(true);
      } else {
        setCurrentRow(0);
        setIsPlaying(false);
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

  const handleModalButtonClick = (options) => {
    if (options === 'yes') {
      setIsRareItemDrawn(false);
    }
    setShowConfirmModal(false);
  };
  // Function to reset the storage
  const resetStorage = () => {
    setClaimedItems({});
  };
  return (
    <>
      <AstralPuzzleConfirmModal
        open={showConfirmModal}
        handleClick={handleModalButtonClick}
      />
      <div className="astral-puzzle">
        {rows.map((row, index) => (
          <AstralPuzzleRow
            prizes={row.prizes}
            key={`row-${index}`}
            drawnPrize={drawnPrize.name}
            isHighlighted={isPlaying && index === rows.length - 1 - currentRow}
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
            disabled={drawnPrize.name === null || drawSameRow.enabled}
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
        <AstralPuzzleDrawResult drawnPrize={drawnPrize.name} />

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
