import { useState } from "react";
import "./App.css";
import Navgation from "./Components/Navagation/Navgation";
import Body from "./Components/Body/Body";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [filterFoodType, setFilterFoodType] = useState("All");
  return (
    <>
      <Navgation
        setSearchValue={setSearchValue}
        setFilterFoodType={setFilterFoodType}
      />
      <Body searchValue={searchValue} filterFoodType={filterFoodType} />
    </>
  );
}

export default App;
