import "./App.css";
import AddItems from "./components/AddItems";
import AppName from "./components/AppName";
import Items from "./components/Items";
function App() {
  let items = [
    {
      work: "GYM",
      due: "22/09/2024",
    },
    {
      work: "Game",
      due: "22/09/2024",
    },
    {
      work: "React",
      due: "22/09/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddItems></AddItems>

      <div className="items-container">
        {/* <Items todoWork={"GYM"} todoDue={"22/02/2024"}></Items>
        <Items todoWork={"React"} todoDue={"22/02/2024"}></Items> */}
        {/* {items.map((item) => (
          <Items todoWork={item.work} todoDue={item.due}></Items>
        ))} */}
      </div>
    </center>
  );
}

export default App;
