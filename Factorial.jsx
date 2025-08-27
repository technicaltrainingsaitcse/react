import React, { useState } from 'react';

function Factorial() {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState('');

  const calculateFactorial = (num) => {
    const n = parseInt(num, 10); 
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const buttonClick = () => {
    let f=calculateFactorial(number);
    setFactorial(f);
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <label>
        Enter a number:
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <br />
      <button onClick={buttonClick}>Calculate Factorial</button>
      <br />
      <label>
        Factorial:
        <input type="text" value={factorial} readOnly />
      </label>
    </div>
  );
}

export default Factorial;
