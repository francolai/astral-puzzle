import '../../styles/astral-puzzle-header.css'; // Importing CSS for styling
import menuLogo from '../../assets/menu.svg'; // Importing menu logo

function AstralPuzzleHeader({ date, openMenu }) {
  return (
    <>
      <div className="astral-puzzle-header">
        <img src={menuLogo} alt="Menu" onClick={openMenu} />
        <header>星界煉金 - {date}</header>
      </div>
    </>
  );
}

export default AstralPuzzleHeader;
