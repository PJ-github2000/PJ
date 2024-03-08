import "./App.css";
import { useState } from "react";

function Switch() {
  const [isBlack, setIsBlack] = useState(true);

  const toggleBackgroundColor = () => {
    setIsBlack(!isBlack);
  };

  return (
    <div className="App" style={{ backgroundColor: isBlack ? 'black' : 'white'}}>
      <div className="Switch-box" style={{ textAlign: 'center'}}>
        <p style={{ color: isBlack ? 'white' : 'black' }}>Light</p>
        <label className="switch">
          <input type="checkbox" onChange={toggleBackgroundColor} checked={!isBlack} />
          <span className="slider round"></span>
        </label>
        <p style={{ color: isBlack ? 'white' : 'black' }}>Dark</p>
      </div>
    </div>
  );
}

export default Switch;