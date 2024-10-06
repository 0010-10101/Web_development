import { useState } from "react";            //react hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {    
  const [todos, setTodos] = useState([{
    title: " We go Gym ",
    description: " Time : 6 to 8am. Chest Day Today.",
    completed: false
  },
  {
    title: " DSA ",
    description: " Time : 9 to 3pm. Solve Bit Manipulation problems. ",
    completed: true
  },
  {
    title: " Development ",
    description: " Time : 6 to 10pm. Create Projects. ",
    completed: true
  }]);
  function addTodo() {      // [1,2] ;  [...todos] => [1,2] ; [...todos, 3] => [1,2,3]
    setTodos([...todos, {
      title: "new Todo",
      description: "description of new Todo"
    }])
  }
  return ( 
  <div>
    <button onClick={addTodo}>Add a random todo</button>
    {/*<Todo title={todos[0].title} description={todos[0].description}></Todo>
    <Todo title={todos[1].title} description={todos[1].description}></Todo>*/}
    {todos.map(function(todo) {
      return (
        <Todo title={todo.title} description={todo.description}></Todo>
      )
    })}
    
  </div>
  )

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}





// function for creating button counter.  
//   const [count, setCount] = useState(0);

// // we only write  "onClickHandler" name, we don't put function symbol after it. It's just how react works.
//   return (
//     <div>
//       <CustomButton count = {count} setCount = {setCount}></CustomButton> 
//     </div>
//   )
}

//effectively this is a component
// function CustomButton (props) {       
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }
//   return  <button onClick = {onClickHandler}>
//     Counter {props.count}             
//   </button>
// }


export default App


//we need to use specific hook => import {useState} from "react"; to define our state.
// () can take  state variables as an input; props is a state variable
  //also getting state update as an input.