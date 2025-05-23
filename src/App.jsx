import { flushSync } from 'react-dom';
import AstralPuzzleHeader from './components/template/AstralPuzzleHeader';
import AstralPuzzleMenu from './components/template/AstralPuzzleMenu';

import puzzles from './data/puzzles/puzzles.jsx';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState('2025/05/22');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleDateChange = (newDate) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setDate(newDate);
      });
    });
  };

  return (
    <>
      <AstralPuzzleMenu
        open={menuOpen}
        closeMenu={toggleMenu}
        setDate={handleDateChange}
        activeDate={date}
      />
      <AstralPuzzleHeader date={date} openMenu={toggleMenu} />
      {puzzles.get(date)}
    </>
  );
}

export default App;
