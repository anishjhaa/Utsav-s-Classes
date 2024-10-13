function printHello() {
  console.log("Hello duniya");
}
function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
    </div>
  );
}
