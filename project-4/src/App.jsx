import { useState } from "react";
import "./App.css";
import Navgation from "./Components/Navagation/Navgation";
import Body from "./Components/Body/Body";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Navgation setSearchValue={setSearchValue}></Navgation>
      <Body searchValue={searchValue}></Body>
    </>
  );
}

export default App;
