import { useState } from "react";
import Block from "./components/Block";
import "./App.css";
function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState<string>("X");

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] != null) return;

    stateCopy[index] = turn;
    setState(stateCopy);

    if (checkWin(stateCopy)) {
      alert(`${turn} player won`);
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  const checkWin = (boardState: (string | null)[]) => {
    const winIndices = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winIndices.length; i++) {
      const [a, b, c] = winIndices[i];
      if (
        boardState[a] != null &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      )
        return true;
    }
    return false;
  };

  return (
    <div className="board">
      <div className="row">
        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
