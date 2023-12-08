import React, { useState } from 'react';

import { number, counterButton } from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p className={`${number} number`}>{count}</p>
      <button
        className={`${counterButton} decraseButton`}
        onClick={decreaseCount}
      >
        Decrease
      </button>
      <button
        className={`${counterButton} increaseButton`}
        onClick={increaseCount}
      >
        Increase
      </button>
    </div>
  );
};
