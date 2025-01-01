import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
    />
  );
}
export { TodoSearch };
