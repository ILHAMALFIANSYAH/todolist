import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="text-center my-5">Todo List</h1>
      <div className="container">
        <div className="col-4 mx-auto">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleAddTodo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-4 mx-auto">
          <div class="card">
            {todos.map((todo, index) => (
              <ul class="list-group list-group-flush d-flex" key={index}>
                <li class="list-group-item">{todo}</li>
                <button
                  onClick={() => handleRemoveTodo(index)}
                  type="button"
                  className="btn btn-success btn-sm m-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </button>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
