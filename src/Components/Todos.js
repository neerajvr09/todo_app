import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { FaCheckDouble } from "react-icons/fa";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);       

  return (
    <ul style={{listStyle:"none"}}>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.todoString}
          <span>
            <FaCheckDouble
              onClick={() => {
                dispatch({
                  type: "REMOVE_TODO",
                  payload: todo.id,
                });
              }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
