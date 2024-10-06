//this code won't give output because the 
//backend server is not written properly / missing

import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  //creating grocery shopping buttons

  const [selectedId, setSelectedId] = useState(1);
  return <div>
    <button onClick={function() {
      setSelectedId(1);
    }}> 1 </button>

<button onClick={function() {
      setSelectedId(2);
    }}> 2 </button>

<button onClick={function() {
      setSelectedId(3);
    }}> 3 </button>

    <Todo id={selectedId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});
    setTimeout( () => {
      useEffect (() => {
        axios.get("http://localhost/8080/todo?id=" + id)
          .then(response => {
            setTodo(response.data.todo)
          })
    }, 5000)
  }, [id])
  return <div>
    Id : {id}
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
  </div>
}

export default App
