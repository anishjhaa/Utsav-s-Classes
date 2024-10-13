function printHello() {
  console.log("Hello duniya");
}
function Button() {
  return (
    <div>
      <button onMouseOver={printHello}>Click me!</button>
    </div>
  );
}
