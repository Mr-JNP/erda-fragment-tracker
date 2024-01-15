import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [origin, setOrigin] = useState(1);
  const [desiredOrigin, setDesiredOrigin] = useState(30);
  const [mastery, setMastery] = useState(0);
  const [desiredMastery, setDesiredMastery] = useState(30);
  const [enhancementOne, setEnhancementOne] = useState(0);
  const [desiredBoostOne, setDesiredBoostOne] = useState(30);
  const [enhancementTwo, setEnhancementTwo] = useState(0);
  const [desiredBoostTwo, setDesiredBoostTwo] = useState(30);
  const [enhancementThree, setEnhancementThree] = useState(0);
  const [desiredBoostThree, setDesiredBoostThree] = useState(30);
  const [enhancementFour, setEnhancementFour] = useState(0);
  const [desiredBoostFour, setDesiredBoostFour] = useState(30);
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
        <img
          className='center'
          src='7308956572081502428.png'
          alt='Cat licking erda fragment'
        />
        <p>Input your current HEXA Skill level</p>
        <section>
          <header>
            <div className='col'>Skill</div>
            <div className='col'>Current Level</div>
            <div className='col'>Desired Level</div>
            <div className='col'>Fragments Spent</div>
            <div className='col'>Fragments Left</div>
            <div className='col'>Total</div>
          </header>
          <div className='row'>
            <div className='col'>Origin</div>
            <div className='col'>
              <input
                tabIndex={1}
                id='origin-level'
                className='col'
                type='number'
                value={origin}
                min={1}
                max={30}
                onChange={(e) => setOrigin(e.target.value)}></input>
            </div>
            <div className='col'>
              <input
                tabIndex={2}
                id='desired-origin-level'
                className='col'
                type='number'
                value={desiredOrigin}
                min={1}
                max={30}
                onChange={(e) => setDesiredOrigin(e.target.value)}></input>
            </div>
            <div className='col'>{getOriginCost(origin)}</div>
            <div className='col'>
              {getOriginCost(desiredOrigin) - getOriginCost(origin)}
            </div>
            <div className='col'>{getOriginCost(desiredOrigin)}</div>
          </div>
          <div className='row'>
            <div className='col'>Mastery</div>
            <div className='col'>
              <input
                tabIndex={1}
                id='mastery-level'
                type='number'
                value={mastery}
                min={0}
                max={30}
                onChange={(e) => setMastery(e.target.value)}></input>
            </div>
            <div className='col'>
              <input
                tabIndex={2}
                id='desired-mastery-level'
                type='number'
                value={desiredMastery}
                min={0}
                max={30}
                onChange={(e) => setDesiredMastery(e.target.value)}></input>
            </div>
            <div className='col'>{getMasteryCost(mastery)}</div>
            <div className='col'>
              {getMasteryCost(desiredMastery) - getMasteryCost(mastery)}
            </div>
            <div className='col'>{getMasteryCost(desiredMastery)}</div>
          </div>
          <div className='row'>
            <div className='col'>Boost A</div>
            <div className='col'>
              <input
                tabIndex={1}
                id='enhancement-one-level'
                type='number'
                value={enhancementOne}
                min={0}
                max={30}
                onChange={(e) => setEnhancementOne(e.target.value)}></input>
            </div>
            <div className='col'>
              <input
                tabIndex={2}
                id='desired-enhancement-one-level'
                type='number'
                value={desiredBoostOne}
                min={0}
                max={30}
                onChange={(e) => setDesiredBoostOne(e.target.value)}></input>
            </div>
            <div className='col'>{getEnhancementCost(enhancementOne)}</div>
            <div className='col'>
              {getEnhancementCost(desiredBoostOne) -
                getEnhancementCost(enhancementOne)}
            </div>
            <div className='col'>{getEnhancementCost(desiredBoostOne)}</div>
          </div>
          <div className='row'>
            <div className='col'>Boost B</div>
            <div className='col'>
              <input
                tabIndex={1}
                id='enhancement-two-level'
                type='number'
                value={enhancementTwo}
                min={0}
                max={30}
                onChange={(e) => setEnhancementTwo(e.target.value)}></input>
            </div>
            <div className='col'>
              <input
                tabIndex={2}
                id='desired-enhancement-two-level'
                type='number'
                value={desiredBoostTwo}
                min={0}
                max={30}
                onChange={(e) => setDesiredBoostTwo(e.target.value)}></input>
            </div>
            <div className='col'>{getEnhancementCost(enhancementTwo)}</div>
            <div className='col'>
              {getEnhancementCost(desiredBoostTwo) -
                getEnhancementCost(enhancementTwo)}
            </div>
            <div className='col'>{getEnhancementCost(desiredBoostTwo)}</div>
          </div>
          <div className='row'>
            <div className='col'>Boost C</div>
            <div className='col'>
              <input
                tabIndex={1}
                id='enhancement-three-level'
                type='number'
                value={enhancementThree}
                min={0}
                max={30}
                onChange={(e) => setEnhancementThree(e.target.value)}></input>
            </div>
            <div className='col'>
              <input
                tabIndex={2}
                id='desired-enhancement-three-level'
                type='number'
                value={desiredBoostThree}
                min={0}
                max={30}
                onChange={(e) => setDesiredBoostThree(e.target.value)}></input>
            </div>
            <div className='col'>{getEnhancementCost(enhancementThree)}</div>
            <div className='col'>
              {getEnhancementCost(desiredBoostThree) -
                getEnhancementCost(enhancementThree)}
            </div>
            <div className='col'>{getEnhancementCost(desiredBoostThree)}</div>
          </div>
          <div className='row'>
            <div className='col'>Boost D</div>
            <div className='col'>
              <input
                tabIndex={1}
                id='enhancement-four-level'
                type='number'
                value={enhancementFour}
                min={0}
                max={30}
                onChange={(e) => setEnhancementFour(e.target.value)}></input>
            </div>
            <div className='col'>
              <input
                tabIndex={2}
                id='desired-enhancement-four-level'
                type='number'
                value={desiredBoostFour}
                min={0}
                max={30}
                onChange={(e) => setDesiredBoostFour(e.target.value)}></input>
            </div>
            <div className='col'>{getEnhancementCost(enhancementFour)}</div>
            <div className='col'>
              {getEnhancementCost(desiredBoostFour) -
                getEnhancementCost(enhancementFour)}
            </div>
            <div className='col'>{getEnhancementCost(desiredBoostFour)}</div>
          </div>
          <div className='row'>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'>Total</div>
            <div className='col'>{getFragmentSpent()}</div>
            <div className='col'>
              {getOriginCost(desiredOrigin) +
                getMasteryCost(desiredMastery) +
                getEnhancementCost(desiredBoostOne) +
                getEnhancementCost(desiredBoostTwo) +
                getEnhancementCost(desiredBoostThree) +
                getEnhancementCost(desiredBoostFour) -
                getFragmentSpent()}
            </div>
            <div className='col'>{TOTAL_FRAGS}</div>
          </div>
          <div className='row'>&nbsp;</div>
          <div className='row'>
            <div className='col'>Completion (Desired Level)</div>
            <div className='col'>Completion (Max Level)</div>
            <div className='col'>ETA to Desired Level (hr)</div>
            <div className='col'>ETA to Max Level (hr)</div>
            <div className='col'>Frags/hr</div>
            <div className='col'>Total Time</div>
          </div>
          <div className='row'>
            <div className='col'>
              {parseFloat(
                (getFragmentSpent() /
                  (getOriginCost(desiredOrigin) +
                    getMasteryCost(desiredMastery) +
                    getEnhancementCost(desiredBoostOne) +
                    getEnhancementCost(desiredBoostTwo) +
                    getEnhancementCost(desiredBoostThree) +
                    getEnhancementCost(desiredBoostFour))) *
                  100
              ).toFixed(2)}
              %
            </div>
            <div className='col'>
              {parseFloat((getFragmentSpent() / TOTAL_FRAGS) * 100).toFixed(2)}%
            </div>
            <div className='col'>
              {income <= 0
                ? "N/A"
                : parseFloat(
                    (getOriginCost(desiredOrigin) +
                      getMasteryCost(desiredMastery) +
                      getEnhancementCost(desiredBoostOne) +
                      getEnhancementCost(desiredBoostTwo) +
                      getEnhancementCost(desiredBoostThree) +
                      getEnhancementCost(desiredBoostFour) -
                      getFragmentSpent()) /
                      income
                  ).toFixed(1)}
            </div>
            <div className='col'>
              {income <= 0
                ? "N/A"
                : parseFloat(
                    (TOTAL_FRAGS - getFragmentSpent()) / income
                  ).toFixed(1)}
            </div>
            <div className='col'>
              <input
                tabIndex={3}
                id='frags-per-hour'
                type='number'
                value={income}
                onChange={(e) => setIncome(e.target.value)}></input>
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
