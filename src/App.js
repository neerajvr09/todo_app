import { useEffect, useReducer } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import todoReducer from "./Context/reducer";
import { TodoContext } from "./Context/TodoContext";

// const initializer = () => (
//   JSON.parse(localStorage.getItem('todos'))
// )

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initializer);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <Todos />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
