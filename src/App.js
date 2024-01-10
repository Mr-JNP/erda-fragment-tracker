import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [origin, setOrigin] = useState(1);
  const [mastery, setMastery] = useState(0);
  const [enhancementOne, setEnhancementOne] = useState(0);
  const [enhancementTwo, setEnhancementTwo] = useState(0);
  const [enhancementThree, setEnhancementThree] = useState(0);
  const [enhancementFour, setEnhancementFour] = useState(0);
  const [income, setIncome] = useState(12);

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

  const getFragmentSpent = () => {
    return (
      getOriginCost(origin) +
      getMasteryCost(mastery) +
      getEnhancementCost(enhancementOne) +
      getEnhancementCost(enhancementTwo) +
      getEnhancementCost(enhancementThree) +
      getEnhancementCost(enhancementFour)
    );
  };

  const TOTAL_ORIGIN = getOriginCost(30);
  const TOTAL_MASTERY = getMasteryCost(30);
  const TOTAL_ENHANCEMENT = getEnhancementCost(30);
  const TOTAL_FRAGS = TOTAL_ORIGIN + TOTAL_MASTERY + 4 * TOTAL_ENHANCEMENT;

  useEffect(() => {
    document.title = "Hoop's Erda Fragments Calculator";
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Erda Fragments Calculator</h1>
        <img className='center' src='7308956572081502428.png' />
        <p>Input your current HEXA Skill level</p>
        <section>
          <header>
            <div className='col'>Skill</div>
            <div className='col'>Current Level</div>
            <div className='col'>Fragments Spent</div>
            <div className='col'>Fragments Left</div>
            <div className='col'>Total</div>
          </header>
          <div className='row'>
            <div className='col'>Origin</div>
            <input
              id='origin-level'
              type='number'
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}></input>
            <div className='col'>{getOriginCost(origin)}</div>
            <div className='col'>{TOTAL_ORIGIN - getOriginCost(origin)}</div>
            <div className='col'>{TOTAL_ORIGIN}</div>
          </div>
          <div className='row'>
            <div className='col'>Mastery</div>
            <input
              id='mastery-level'
              type='number'
              value={mastery}
              onChange={(e) => setMastery(e.target.value)}></input>
            <div className='col'>{getMasteryCost(mastery)}</div>
            <div className='col'>{TOTAL_MASTERY - getMasteryCost(mastery)}</div>
            <div className='col'>{TOTAL_MASTERY}</div>
          </div>
          <div className='row'>
            <div className='col'>Enhancement#1</div>
            <input
              id='enhancement-one-level'
              type='number'
              value={enhancementOne}
              onChange={(e) => setEnhancementOne(e.target.value)}></input>
            <div className='col'>{getEnhancementCost(enhancementOne)}</div>
            <div className='col'>
              {TOTAL_ENHANCEMENT - getEnhancementCost(enhancementOne)}
            </div>
            <div className='col'>{TOTAL_ENHANCEMENT}</div>
          </div>
          <div className='row'>
            <div className='col'>Enhancement#2</div>
            <input
              id='enhancement-two-level'
              type='number'
              value={enhancementTwo}
              onChange={(e) => setEnhancementTwo(e.target.value)}></input>
            <div className='col'>{getEnhancementCost(enhancementTwo)}</div>
            <div className='col'>
              {TOTAL_ENHANCEMENT - getEnhancementCost(enhancementTwo)}
            </div>
            <div className='col'>{TOTAL_ENHANCEMENT}</div>
          </div>
          <div className='row'>
            <div className='col'>Enhancement#3</div>
            <input
              id='enhancement-three-level'
              type='number'
              value={enhancementThree}
              onChange={(e) => setEnhancementThree(e.target.value)}></input>
            <div className='col'>{getEnhancementCost(enhancementThree)}</div>
            <div className='col'>
              {TOTAL_ENHANCEMENT - getEnhancementCost(enhancementThree)}
            </div>
            <div className='col'>{TOTAL_ENHANCEMENT}</div>
          </div>
          <div className='row'>
            <div className='col'>Enhancement#4</div>
            <input
              id='enhancement-four-level'
              type='number'
              value={enhancementFour}
              onChange={(e) => setEnhancementFour(e.target.value)}></input>
            <div className='col'>{getEnhancementCost(enhancementFour)}</div>
            <div className='col'>
              {TOTAL_ENHANCEMENT - getEnhancementCost(enhancementFour)}
            </div>
            <div className='col'>{TOTAL_ENHANCEMENT}</div>
          </div>
          <div className='row'>
            <div className='col'>Total</div>
            <div className='col'></div>
            <div className='col'>{getFragmentSpent()}</div>
            <div className='col'>{TOTAL_FRAGS - getFragmentSpent()}</div>
            <div className='col'>{TOTAL_FRAGS}</div>
          </div>
          <div className='row'>
            <div className='col'>Completion</div>
            <div className='col'>
              {parseFloat((getFragmentSpent() / TOTAL_FRAGS) * 100).toFixed(2)}%
            </div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
          </div>
          <div className='row'>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'>Frags/hr</div>
            <div className='col'>Time Left (hr)</div>
            <div className='col'>Total Time</div>
          </div>
          <div className='row'>
            <div className='col'></div>
            <div className='col'></div>
            <input
              id='frags-per-hour'
              type='number'
              value={income}
              onChange={(e) => setIncome(e.target.value)}></input>
            <div className='col'>
              {income <= 0
                ? "N/A"
                : parseFloat(
                    (TOTAL_FRAGS - getFragmentSpent()) / income
                  ).toFixed(1)}
            </div>
            <div className='col'>
              {income <= 0
                ? "N/A"
                : parseFloat(TOTAL_FRAGS / income).toFixed(1)}
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
