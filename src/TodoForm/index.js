import React, { useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal((m) => !m);
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Ingresa un TODO"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={() => setOpenModal((m) => !m)}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
