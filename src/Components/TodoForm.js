import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { v4 } from "uuid";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

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
    <Form>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next todo..."
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="warning" onClick={submitHandler}>
            Add Task
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
