// Objects & States
import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let updatedBlue = () => {
    moves.blue += 1;
    console.log(moves);
    // setMoves({ ...moves });
    setMoves((prevMoves) => {
      return { ...prevMovesm, blue: prevMoves.blue + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue Moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onclick={updatedBlue}>
          +1
        </button>
        <p>Blue Moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }}> +1 </button>
        <p>Blue Moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }}> +1 </button>
        <p>Blue Moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }}> +1 </button>
      </div>
    </div>
  );
}
