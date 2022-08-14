import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { v4 } from "uuid";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
    setTodoString("");
  };

  return (
    <form>
      <h4>Add a task</h4>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Your next todo..."
        value={todoString}
        onChange={(e) => setTodoString(e.target.value)}
      />
      <button onClick={submitHandler}>Add Task</button>
    </form>
  );
};

export default TodoForm;
