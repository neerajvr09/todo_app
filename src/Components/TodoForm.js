import React from "react";

const TodoForm = () => {
  return (
    <form>
      <h4>Add a task</h4>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Your next todo..."
      />
      <button>Add Task</button>
    </form>
  );
};

export default TodoForm;
