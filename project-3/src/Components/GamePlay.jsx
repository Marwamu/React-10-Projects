import React, { useState } from "react";
import styled from "styled-components";

function GamePlay() {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [rolledNumber, setRolledNumber] = useState(1);
  const [errorVisible, setErrorVisible] = useState(false);

  const toggleRules = () => setShowRules((prev) => !prev);

  const handleNumberSelect = (num) => {
    setSelectedNumber(num);
    setRolledNumber(num); // Show the selected dice before roll
  };

  const rollDice = () => {
    if (selectedNumber === null) {
      setErrorVisible(true); // show error
      return; // stop execution
    }

    setErrorVisible(false); // hide error

    const random = Math.ceil(Math.random() * 6);
    setRolledNumber(random);

    if (random === selectedNumber) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => Math.max(prev - 2, 0));
    }
  };

  const resetScore = () => {
   
    setScore(0);
    setSelectedNumber(null);
    setRolledNumber(1);
     setErrorVisible(false); 
  };

  return (
    <GameContainer>
      <div className="game-header">
        <div className="score">
          <h1 className="score-no">{score}</h1>
          <p>Total Score</p>
        </div>

        <div className="select-dice">
          {errorVisible && (
            <p className="error-message">You have not selected any number</p>
          )}{" "}
          <ul>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <li key={num}>
                <button
                  className={`select-no ${
                    selectedNumber === num ? "selected" : ""
                  }`}
                  onClick={() => handleNumberSelect(num)}
                >
                  {num}
                </button>
              </li>
            ))}
          </ul>
          <p>Select Number</p>
        </div>
      </div>

      <div className="dices-section">
        <div className="dice">
          <button onClick={rollDice}>
            <img
              src={`./images/dice_${rolledNumber}.png`}
              alt={`Dice ${rolledNumber}`}
            />
          </button>
          <p>Click on Dice to roll</p>
        </div>

        <div className="btns">
          <ButtonSecond onClick={resetScore}>Reset Score</ButtonSecond>
          <Button onClick={toggleRules}>
            {showRules ? "Hide Rules" : "Show Rules"}
          </Button>
        </div>
      </div>

      {showRules && (
        <div className="rules-section">
          <ul>
            <h1>How to play dice game</h1>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              If your selected number matches the dice roll, you gain points
              equal to the dice number.
            </li>
            <li>If your guess is wrong, 2 points will be deducted.</li>
          </ul>
        </div>
      )}
    </GameContainer>
  );
}
export default GamePlay;

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  margin: 64px 80px;
  gap: 48px;

  .game-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 4px;
    align-items: center;
    gap: 16px;
  }
  .score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .score h1 {
    font-weight: 500;
    font-size: 100px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  .score p {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  .dice button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  .select-dice {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;
  }
  .select-dice .error-message {
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ff0c0c;
  }
  .select-dice p {
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  .select-dice ul {
    margin: 0;
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
  }
  .select-dice li {
    width: 72px;
    height: 72px;
    border-width: 1px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #000000;
  }
  .select-dice li button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer !important;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #000000;
    border: 1px solid #000000;
  }
  .select-dice li button::selection {
    color: #ffffff;
    background: #000000;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
  }
  .dices-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 36px;
    margin-top: 64px;
  }
  .dice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .dice p {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  .btns {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  .rules-section {
    padding: 20px;
    background: #fbf1f1;
  }
  .rules-section ul {
    list-style: none;
  }
  .rules-section li {
    margin-bottom: 4px;
  }
  .rules-section ul h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    margin-bottom: 24px;
    list-style: none;
  }
  .select-no {
    cursor: pointer;
  }
  .select-no.selected {
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
    transition: 0.3s ease-in-out;
  }
`;
const Button = styled.button`
  width: 220px;
  height: 44px;
  gap: 10px;
  border-radius: 5px;
  padding-top: 10px;
  padding-right: 18px;
  padding-bottom: 10px;
  padding-left: 18px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffff;
  background: #000;
  border: none;

  &:hover {
    background: white;
    border: 1px solid #000;
    color: black;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out,
      border 0.3s ease-in-out;
  }
`;

const ButtonSecond = styled.button`
  width: 220px;
  height: 44px;
  gap: 10px;
  border-radius: 5px;
  padding-top: 10px;
  padding-right: 18px;
  padding-bottom: 10px;
  padding-left: 18px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000;
  background: transparent;
  border: 1px solid #000;

  &:hover {
    background: #000;
    border: none;
    color: #fff;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out,
      border 0.3s ease-in-out;
  }
`;
