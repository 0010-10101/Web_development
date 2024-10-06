import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,  { Fragment } from 'react'

function App() {

  
  return (
    <div> 
      <HeaderWithButton />
      <Header title="This is a static string 1"></Header><br></br>
      <Header title="This is a static string 2"></Header><br></br>
      <Header title="This is a static string 3"></Header><br></br>
      <Header title="This is a static string 4"></Header><br></br>

    </div>
  )
}
function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Sam");
  function updateTitle() {
    setTitle("Using math.random() to show re-rendering : " + Math.random());
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header><br></br>
  </div>
}

const Header = React.memo(function Header ({title}) {
  return <div><b>
      {title} </b>
    </div>
})

export default App
