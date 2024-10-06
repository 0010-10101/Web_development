import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from "react"
import React, {Fragment} from "react"
let counter = 4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    id: 2,
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    id: 3,
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])
  function addTodo() {
    setTodos([...todos, {
      id: counter++,                               //id is hardcoded it should increment, define a global variable counter =4
      title: Math.random(),
      description: Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}> Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App