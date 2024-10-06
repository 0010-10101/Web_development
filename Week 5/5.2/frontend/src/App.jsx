/*
//written by me.
mport { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}> </Todos>
    </div>
  )
}

export default App
*/












import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  //   .then(async function(res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App









//explaination:
/* <CreateTodo></CreateTodo>
    <Todos></Todos>

    Some html tag kind of a thing for creating a Todos
    and some html tag kind of a thing for rendering a todo */


/*Question is how do you hit the backend an put it in a state variable. 
  Next define a state variabe at the top 
  ie const [todos,setTodos] = useState([]);  this is an empty array.
  
  Next we need to hit the backend and get back the current set of todos 
  and call setTodos with current set of todos.
  
  Next step   */