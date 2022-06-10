import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>react state counter lev1_3</h4>
      <div className="counter_container">
        <h2>Counter</h2>
        <div className="counter_display">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button onClick={() => setCount(count - count)}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
