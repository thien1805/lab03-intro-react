import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); 

  const incrementCount = () => {
    setCount(count + 1); 
  };

  return (
    <div style={{ border: '1px dashed orange', padding: '15px' }}>
      <h3>Simple Counter (Ex 5)</h3>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>
        Increment by 1
      </button>
    </div>
  );
}

export default Counter;