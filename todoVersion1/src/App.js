import "./App.css";
import AddItems from "./components/AddItems";
import AppName from "./components/AppName";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddItems></AddItems>

      <div className="items-container">
        <Item1></Item1>

        <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
