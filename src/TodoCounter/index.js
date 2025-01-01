import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  var counterText = `Has completado ${completedTodos} de ${totalTodos} TODOS`;

  if (totalTodos > 0 && completedTodos === totalTodos)
    counterText = "Has completado todas las tareas";

  return <h1 className="TodoCounter">{counterText}</h1>;
}

export { TodoCounter };
