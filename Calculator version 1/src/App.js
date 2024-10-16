// import styles from "./app.module.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
function App() {
  return (
    <div className="calculator">
      <Display></Display>
      <div className="buttonContainer">
        <Buttons></Buttons>
      </div>
    </div>
  );
}

export default App;
