import { useReducer } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import todoReducer from "./Context/reducer";
import { TodoContext } from "./Context/TodoContext";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

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
