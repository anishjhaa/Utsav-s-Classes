function printHello(event) {
  console.log(event);
  console.log("Hello duniya");
}
function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
    </div>
  );
}
