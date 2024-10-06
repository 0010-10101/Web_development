import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [todos, setTodos] = useState([]);
console.log("app got called");

  function appTodo() {
    console.log("appTodo got called");
    let newTodos = [];
    for(let i=0;i<todos.length; i++){
      newTodos.push(todos[i])
    }
    newTodos.push({
      title: "Title",
      description: "Description"
    })
    setTodos(newTodos)
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo){
        return <Todo title= {todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo(props) {
  console.log("todo component got called");
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
