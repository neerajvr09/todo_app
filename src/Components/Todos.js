import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { FaCheckDouble } from "react-icons/fa";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <list>
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
        </list>
      ))}
    </ul>
  );
};

export default Todos;
