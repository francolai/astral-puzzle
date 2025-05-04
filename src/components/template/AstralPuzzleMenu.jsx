import puzzles from '../../data/puzzles/puzzles';

import '../../styles/astral-puzzle-menu.css';

function AstralPuzzleMenu({ open, closeMenu, setDate, activeDate }) {
  const menuOptions = [];

  // Create menu options based on the puzzles map
  puzzles.forEach((value, date) => {
    menuOptions.push(
      <div
        className={`astral-puzzle-menu-option${
          activeDate === date ? ' active' : ''
        }`}
        key={date}
        onClick={() => {
          setDate(date);
        }}
      >
        {date}
      </div>
    );
  });

  return (
    open && (
      <div className="astral-puzzle-menu-modal">
        <div className="astral-puzzle-menu">
          <div className="astral-puzzle-menu-header">上期煉金</div>
          <div className="astral-puzzle-menu-options">{menuOptions}</div>
        </div>
        <div className="astral-puzzle-menu-backdrop" onClick={closeMenu}></div>
      </div>
    )
  );
}

export default AstralPuzzleMenu;
