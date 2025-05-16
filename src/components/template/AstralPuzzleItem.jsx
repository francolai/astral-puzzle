import '../../styles/astral-puzzle-item.css';

function AstralPuzzleItem({ name, imageURL, dataURL, quality }) {
  const handleItemIconClick = (url) => {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    };
    openInNewTab(url);
  };
  let borderClassName;
  if (quality === '一般') {
    borderClassName = 'border-1';
  }
  if (quality === '特殊') {
    borderClassName = 'border-2';
  }
  if (quality === '稀有') {
    borderClassName = 'border-3';
  }
  if (quality === '史詩') {
    borderClassName = 'border-4';
  }
  if (quality === '競技') {
    borderClassName = 'border-5';
  }
  if (quality === '神話') {
    borderClassName = 'border-6';
  }
  if (quality === '永恆') {
    borderClassName = 'border-7';
  }

  return (
    <div
      className="astral-puzzle-item"
      title={name}
      onClick={() => handleItemIconClick(dataURL)}
    >
      <div className={`border ${borderClassName}`} />
      <img src={imageURL} />
    </div>
  );
}

export default AstralPuzzleItem;
