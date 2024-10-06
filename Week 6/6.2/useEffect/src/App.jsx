
import { useState , useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/todos")
      .then(function(response) {
        setTodos(response.data.todos)
      })
  }, []);


  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
      <h1>
        {title}
      </h1>
      <h3>
        {description}
      </h3>
    </div>
}
export default App;









/*
//code from github

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [])

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
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

export default App;
*/