import { useState } from "react";
export default function TodoList() {
  let [todos, setTodo] = useState(["sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    console.log("we have to add new task in todo.");
    // setTodo([...todos, newTodo]);
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    console.log("delete todo");
    setTodo((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  return (
    <div>
      <input
        placeholder="enter your task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Tasks To do </h4>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id}>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>;
        })}
      </ul>
    </div>
  );
}
