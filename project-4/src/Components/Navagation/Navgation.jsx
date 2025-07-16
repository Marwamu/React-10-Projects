import React, { useState } from "react";
import "./Navagationmodule.css";

const Navgation = ({ setSearchValue, foodType }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const foodFilter = (e) => {
    foodType(e.target.value);
  };
  const filterItem = ["All", "Breakfast", "Lunch", "Dinner"];
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">
          F<span>oo</span>dy Z<span>o</span>ne
        </h1>
        <input
          type="text"
          placeholder="Search Food..."
          className="search"
          onChange={handleChange}
        />
      </div>
      <div>
        <ul className="filter-items">
          {filterItem.map((item, index) => {
            return (
              <li key={index} className="filter-item" onChange={foodFilter}
>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navgation;
