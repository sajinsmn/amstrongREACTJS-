import React, { useState } from 'react';

function ArmstrongChecker() {
  // State to store the user's input number
  const [numberInput, setNumberInput] = useState('');
  // State to store the result message
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setNumberInput(event.target.value);
  };

  const checkNumber = () => {
    // Convert input string to an integer
    const n = parseInt(numberInput);

    // Basic validation
    if (isNaN(n) || n <= 0) {
      setResult('Please enter a valid positive number.');
      return;
    }

    let o = n; // Original number
    let c = String(n).length; // Number of digits
    let d = 0; // Sum of powers
    let tempN = n; // Temporary variable for calculation

    while (tempN > 0) {
      let a = tempN % 10; // Get the last digit
      d += a ** c;
      tempN = Math.floor(tempN / 10); // Remove the last digit
    }

    if (d === o) {
      setResult(`${o} is an Armstrong Number! ✨`);
    } else {
      setResult(`${o} is not an Armstrong Number.`);
    }
  };

  return (
    <div>
      <h2>Armstrong Number Checker</h2>
      <input
        type="number"
        value={numberInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={checkNumber}>Check</button>
      
      {/* Display the result only if it's not empty */}
      {result && <p><strong>{result}</strong></p>}
    </div>
  );
}

export default ArmstrongChecker;
