import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { FaCheckDouble } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "reactstrap";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 mb-2">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
          className="float-end"
            onClick={() => {
              dispatch({
                type: "REMOVE_TODO",
                payload: todo.id,
              });
            }}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
