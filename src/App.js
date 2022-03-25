import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import bg1 from './assets/1.png';
import bg2 from './assets/2.png';
import liv from './assets/3.png';
import bubu from './assets/4.png';

function App() {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [livAnimate, setLivAnimate] = useState(false);
  const [bubuAnimate, setBubuAnimate] = useState(false);

  return (
    <div id="container">
      <div className="scoreboard-container">
        <img src={liv} className="liv" />
      <div className="scoreboard">
        <div style={{'backgroundImage': `url(${bg1})`, 'backgroundPosition': '10% 50%'}} className="scoreboard--section scoreboard--section-1">
          {scoreOne}
        </div>
        <div style={{'background': `url(${bg2})`, 'backgroundPosition': '80% 50%'}} className="scoreboard--section scoreboard--section-2">
          {scoreTwo}
        </div>
      </div>
      </div>
      <div className="scoreboard-buttons">
      <img src={bubu} className="bubu" />
        <div className="scoreboard-buttons--section">
          <button onClick={() => {setScoreOne(scoreOne + 1)}} className="scoreboard-buttons--button">Liv+</button>
          <button onClick={() => {setScoreOne(scoreOne - 1)}} className="scoreboard-buttons--button">Liv-</button>
        </div>
        <div className="scoreboard-buttons--section">
          <button onClick={() => {setScoreTwo(scoreTwo + 1)}} className="scoreboard-buttons--button">Bubu+</button>
          <button onClick={() => {setScoreTwo(scoreTwo - 1)}} className="scoreboard-buttons--button">Bubu-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
