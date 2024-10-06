import { useState } from "react"
import { useEffect } from "react"
//https://100x-b-mcdn.akamai.net.in/cohort-2-slides/6.1.pdf
//link for the slides is above ; refer page 24/31 of the pdf
//solving the Hooks-use effect assignment.
function App() {
 const [todos, setTodos] = useState([])   /// initialized an empty array
  useEffect(() => {
    setInterval(() => {
      // we cannot write async function inside a useeffect.
      //use promise syntax
      // link :   https://sum-server.100xdevs.com/todos
      fetch("http://localhost:8080/todos/")        
        .then(async function(res){
          const json = await res.json();
           setTodos(json.todos); 
      })
    },5000)
  })

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} /> )}
  </div>
}

function Todo({title, description}) {
  return  <div>
    <h1> 
      { title }
    </h1>
    <h3>
      { description } 
    </h3>
  </div>
}
export default App;