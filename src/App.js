import { useEffect, useReducer } from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import todoReducer from "./Context/reducer";
import { TodoContext } from "./Context/TodoContext";

const initializer = () => {
   const localTodos = localStorage.getItem('todos')
   const data = localTodos ? JSON.parse(localTodos) : [];
   return data
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initializer);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container className="mt-3">
        <h1  className="text-center mb-4">Todo List</h1>
        <TodoForm />
        <Todos />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
