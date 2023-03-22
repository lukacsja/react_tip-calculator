import cn from 'classnames';
import React, { useState } from 'react';
import './App.scss';

export const App: React.FC = () => {
  const [bill, setBill] = useState<number | null>(null);
  const [percent, setPercent] = useState<number | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);

  const reset = () => {
    setBill(null);
    setNumberOfPeople(null);
    setPercent(null);
  }

  const tipSum = bill && percent
    ? (bill * percent / 100)
    : 0;
  const tipPerPerson = (tipSum && numberOfPeople
    ? (tipSum / numberOfPeople).toFixed(2)
    : 0);
  const totalPerPerson = (bill && numberOfPeople && percent
    ? ((bill + bill * percent / 100) / numberOfPeople).toFixed(2)
    : 0);

  const handleTipSelection = (value: number) => {
    setPercent(value);
  };

  return (
    <div className='App'>
      <div className="container">
        <div className="logo"></div>
        <div className="calculator">
          <div className='calculator__left'>
            <div className='input'>
              <h2 className='input__title'>Bill</h2>
              <input
                className='input__field input__field--bill'
                type="number"
                min={1}
                value={bill || ''}
                onChange={(event) => setBill(+event.target.value)}
                placeholder='0'
              />
            </div>
            <div className='input__select'>
              <h2
                className='input__title input__title--tip'
              >
                Select Tip %
              </h2>
              <div className='grid-container'>
                <button
                  onClick={() => handleTipSelection(5)}
                  className={cn(
                    'grid-item',
                    { 'grid-item--active': percent === 5 },
                  )}
                >
                  5%
                </button>
                <button
                  onClick={() => handleTipSelection(10)} className={cn(
                    'grid-item',
                    { 'grid-item--active': percent === 10 },
                  )}
                >
                  10%
                </button>
                <button
                  onClick={() => handleTipSelection(15)} className={cn(
                    'grid-item',
                    { 'grid-item--active': percent === 15 },
                  )}
                >
                  15%
                </button>
                <button onClick={() => handleTipSelection(25)} className={cn(
                  'grid-item',
                  { 'grid-item--active': percent === 25 },
                )}
                >
                  25%
                </button>
                <button onClick={() => handleTipSelection(50)} className={cn(
                  'grid-item',
                  { 'grid-item--active': percent === 50 },
                )}
                >
                  50%
                </button>
                <input
                  type="number"
                  min={1}
                  onChange={(event) => setPercent(+event.target.value)}
                  className='grid-item grid-item--input'
                  placeholder='Custom'
                />
              </div>
            </div>
            <div className='input'>
              <h2 className='input__title'>Number of People</h2>
              <input
                className='input__field input__field--people'
                type="number"
                min={1}
                value={numberOfPeople || ''}
                onChange={(event) => setNumberOfPeople(+event.target.value)}
                placeholder='0'
              />
            </div>
          </div>
          <div className='calculator__right'>
            <div className='sumblocks'>
              <div className='sumblock sumblock--tip'>
                <div className='sumblock__content'>
                  <div className='sumblock__content--line1'>Tip Amount</div>
                  <div className='sumblock__content--line2'>/person</div>
                </div>
                <div className='sumblock__value'>{tipPerPerson}</div>
              </div>
              <div className='sumblock sumblock--total'>
                <div className='sumblock__content'>
                  <div className='sumblock__content--line1'>Total</div>
                  <div className='sumblock__content--line2'>/person</div>
                </div>
                <div className='sumblock__value'>{totalPerPerson}</div>
              </div >
            </div>
            <button className='reset-button' onClick={reset}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
