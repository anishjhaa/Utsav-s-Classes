// useState is a React Hook that lets you add a state variable to your component
// const [state, setState] = useState(initialState).
// useState returns an array with exactly two values:-
// 1. The current state. During the first render, it will match the intialState you have passed.
// 2. The set function that lets you update the state to a different value and trigger a re-render.

import { useState } from "react";
export default function Counter() {
  // let arr = useState(0);
  // console.log(arr);

  // let [stateVariable, setStateVariable] = useState(10);

  let [count, setCount] = useState(0);
  let incCount = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>increaseCount</button>
    </div>
  );
}
