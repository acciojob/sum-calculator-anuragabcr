import React, { useState, useEffect } from 'react';

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value, 10);
    if (!isNaN(newNumber)) {
      setNumbers([...numbers, newNumber]);
    }
  };

  useEffect(() => {
    const calculateSum =  () => {
      let total = 0;
      for (const num of numbers) {
        total += num;
      }
      setSum(total);
    };

    calculateSum();
  }, [numbers]);

  return (
    <div className="sum-calculator">
      <h1>Sum Calculator</h1>
      <input type="number" placeholder="Enter a number" onChange={handleNumberChange} />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumCalculator;
