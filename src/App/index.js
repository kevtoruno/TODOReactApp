import React, { useState } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

/*const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALALA", completed: false },
];

localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));*/
//localStorage.removeItem("TODOS_V1");

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
