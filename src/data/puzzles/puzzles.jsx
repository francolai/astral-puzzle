import AstralPuzzle250612 from '../../components/puzzles/AstralPuzzle250612';
import AstralPuzzle250605 from '../../components/puzzles/AstralPuzzle250605';
import AstralPuzzle250529 from '../../components/puzzles/AstralPuzzle250529';
import AstralPuzzle250522 from '../../components/puzzles/AstralPuzzle250522';
import AstralPuzzle250515 from '../../components/puzzles/AstralPuzzle250515';
import AstralPuzzle250508 from '../../components/puzzles/AstralPuzzle250508';
import AstralPuzzle250430 from '../../components/puzzles/AstralPuzzle250430';

const lastUpdate = '2025/06/12'; // Last update date for the puzzles
const puzzles = new Map([
  ['2025/06/12', <AstralPuzzle250612 />],
  ['2025/06/05', <AstralPuzzle250605 />],
  ['2025/05/29', <AstralPuzzle250529 />],
  ['2025/05/22', <AstralPuzzle250522 />],
  ['2025/05/15', <AstralPuzzle250515 />],
  ['2025/05/08', <AstralPuzzle250508 />],
  ['2025/04/30', <AstralPuzzle250430 />],
]);

export { lastUpdate, puzzles };
// This file contains the mapping of dates to their respective puzzle components.
