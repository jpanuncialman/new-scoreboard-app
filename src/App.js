import { useState } from 'react';
import './App.css';
import ain from './assets/ain.png';
import bubu from './assets/bubu.png';
import scoreboard from './assets/scoreboard.png'

function App() {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  // const [livAnimate, setLivAnimate] = useState(false);
  // const [bubuAnimate, setBubuAnimate] = useState(false);

  const nameOne = 'Ain';
  const nameTwo = 'Bubu';

  return (
    <div id="container">
      <div className="scoreboard-container">
        <img src={ain} className="chara ain" alt="ain" />
      <div style={{'backgroundImage': `url(${scoreboard})`, 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center', 'backgroundSize': 'contain'}} className="scoreboard">
        <div className="scoreboard--section scoreboard--section-1">
          <h3 className='name'>{nameOne}</h3>
          <div className='score'>{scoreOne}</div>
        </div>
        <div className="scoreboard--section scoreboard--section-2">
        <h3 className='name'>{nameTwo}</h3>
          <div className='score'>{scoreTwo}</div>
        </div>
      </div>
      </div>
      <div className="scoreboard-buttons">
      <img src={bubu} className="chara bubu" alt="bubu" />
        <div className="scoreboard-buttons--section">
          <button onClick={() => {setScoreOne(scoreOne + 1)}} className="scoreboard-buttons--button">{nameOne}+</button>
          <button onClick={() => {setScoreOne(scoreOne - 1)}} className="scoreboard-buttons--button">{nameOne}-</button>
        </div>
        <div className="scoreboard-buttons--section">
          <button onClick={() => {setScoreTwo(scoreTwo + 1)}} className="scoreboard-buttons--button">{nameTwo}+</button>
          <button onClick={() => {setScoreTwo(scoreTwo - 1)}} className="scoreboard-buttons--button">{nameTwo}-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
