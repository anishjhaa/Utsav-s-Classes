// The state is a built-in React object that is used to contain data or information
// about the component. A component's state can change over time; whenever it changes,
// the component re-render.

export default function Counter() {
  let count = 0;
  function incCount() {
    count += 1;
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>increaseCount</button>
    </div>
  );
}
