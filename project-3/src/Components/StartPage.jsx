import React from "react";
import styled from "styled-components";

const StartPage = ({toggle}) => {
  const playNow = () => {
    window.location.href = "/game";
  };
  return (
    <Container>
      <div>
        <img src=".\images\dices.png" alt="" />
      </div>
      <div className="start-content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartPage;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .start-content {
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: 16px;
  }
  .start-content h1 {
    font-weight: 700;
    font-size: 96px;
    line-height: 100%;
    white-space: nowrap;
    letter-spacing: 0%;
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
    transition: color 0.3s ease-in-out,  background 0.3s ease-in-out,
      border 0.3s ease-in-out;
  }
`;
