import { useState } from "react";
function init() {
  console.log("init was executed");
  return Math.random();
}
export default function Counter() {
  // let [count, setCount] = useState(init()); initializtion
  let [count, setCount] = useState(init);
  let incCount = () => {
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
