import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
 
  const [todos, setTodos] = useState([]);

  const addTodo = (item) => {
    
    setTodos([...todos, item]);
    
   
    console.log(item)
  };

  
  
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React To Do List</h1>
      <TodoInput  addTodo={addTodo}/>
      <TodoList todos={todos} remove={deleteTodo}/>
      </div>

  )
}



      {/* <input
        type="text"
        name="Todo"
        placeholder="Create To DO"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="button" className="addButton" onClick={addTodos}>
        Add
      </button> */}
{/* 
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}>{todo} </li>
              <button
                type="delete-button"
                onClick={() => {
                  deleteTodo(todo);
                }}
              >
                delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>no todo list</p>
        </div>
      )} */}

      
 
    
  

export default App;
