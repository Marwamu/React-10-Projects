import React, {useState} from "react";
import "./App.css";
import styled from "styled-components";
import StartPage from "./Components/StartPage";
import GamePage from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = React.useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
    console.log(prev);
  }

  return (
    <>
      <StartPage />
    </>
  );
}

export default App;
