import { useState } from 'react'
//here removed imports that are unused
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //   <button onClick={() => setCount((count) => count + 1)}>
    //         count is {count}
    //       </button>
    // </div>
    <div>
      <button onClick = {function(){
        setCount(Math.random())               //setCount is a global function.
      }}>
        count is {count}
      </button>
    </div>
  )
}

export default App
