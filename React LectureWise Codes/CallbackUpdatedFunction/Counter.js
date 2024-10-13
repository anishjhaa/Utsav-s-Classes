// How to change state when it depends on the current value:- when new state value depends upon old state value then we use callback.

import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  let incCount = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // callBack
    setCount((currCount) => {
      return count + 1;
    });
    setCount((currCount) => {
      return count + 1;
    });
  };
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>increaseCount</button>
    </div>
  );
}
