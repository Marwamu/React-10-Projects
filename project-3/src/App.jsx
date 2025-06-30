import React, {useState} from "react";
import "./App.css";
import StartPage from "./Components/StartPage";
import GamePage from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = React.useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {
      isGameStarted ? <GamePage /> : <StartPage toggle={toggleGamePlay} />
    }
    </>
  );
}

export default App;
