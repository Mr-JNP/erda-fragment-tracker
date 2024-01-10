import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [origin, setOrigin] = useState(1);
  const [mastery, setMastery] = useState(0);
  const [enhancementOne, setEnhancementOne] = useState(0);
  const [enhancementTwo, setEnhancementTwo] = useState(0);
  const [enhancementThree, setEnhancementThree] = useState(0);
  const [enhancementFour, setEnhancementFour] = useState(0);
  const [fragment, setFragment] = useState(0);

  const getOriginCost = (level) => {
    const costs = [
      0, 30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130, 140,
      150, 160, 350, 170, 180, 190, 200, 210, 220, 230, 240, 250, 500,
    ];
    return costs.slice(0, level).reduce((a, b) => a + b, 0);
  };

  const getMasteryCost = (level) => {
    const costs = [
      50, 15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75,
      80, 175, 85, 90, 95, 100, 105, 110, 115, 120, 125, 250,
    ];
    return costs.slice(0, level).reduce((a, b) => a + b, 0);
  };

  const getEnhancementCost = (level) => {
    const costs = [
      75, 23, 27, 30, 34, 38, 42, 45, 49, 150, 60, 68, 75, 83, 90, 98, 105, 113,
      120, 263, 128, 135, 143, 150, 158, 165, 173, 180, 188, 375,
    ];
    return costs.slice(0, level).reduce((a, b) => a + b, 0);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='vertical'>
          <div className='horizontal'>
            <span>Origin Core Level </span>
            <input
              id='origin-level'
              type='number'
              onChange={(e) => setOrigin(e.target.value)}></input>
          </div>
          <div className='horizontal'>
            <span>Mastery Core Level </span>
            <input
              id='mastery-level'
              type='number'
              onChange={(e) => setMastery(e.target.value)}></input>
          </div>
          <div className='horizontal'>
            <span>Enhancement Core #1 Level </span>
            <input
              id='enhancement-one-level'
              type='number'
              onChange={(e) => setEnhancementOne(e.target.value)}></input>
          </div>
          <div className='horizontal'>
            <span>Enhancement Core #2 Level </span>
            <input
              id='enhancement-two-level'
              type='number'
              onChange={(e) => setEnhancementTwo(e.target.value)}></input>
          </div>
          <div className='horizontal'>
            <span>Enhancement Core #3 Level </span>
            <input
              id='enhancement-three-level'
              type='number'
              onChange={(e) => setEnhancementThree(e.target.value)}></input>
          </div>
          <div className='horizontal'>
            <span>Enhancement Core #4 Level </span>
            <input
              id='enhancement-four-level'
              type='number'
              onChange={(e) => setEnhancementFour(e.target.value)}></input>
          </div>
          <button
            onClick={(e) => {
              const result =
                getOriginCost(origin) +
                getMasteryCost(mastery) +
                getEnhancementCost(enhancementOne) +
                getEnhancementCost(enhancementTwo) +
                getEnhancementCost(enhancementThree) +
                getEnhancementCost(enhancementFour);
              setFragment(result);
            }}>
            Calculate
          </button>
        </div>
        <span id='results' style={{ padding: "10px" }}>
          You've spent {fragment} fragments already. You need {20184 - fragment}{" "}
          more fragments to max 6th job.
        </span>
      </header>
    </div>
  );
}

export default App;
