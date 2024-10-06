import { useContext, useState } from "react"
import { CountContext } from "./context"
function App() {

  //wrap anyone that wants to use the teleported value inside a provider.
  const [count, setCount] = useState(0);
  //passing count as a state variable in the div.
  //passing count & setCount  as a state variable in the div
  return (
    <div> 
      <CountContext.Provider value={{count, setCount}}>        
      <Count setCount = {setCount} />       
      </CountContext.Provider>
    </div>
  )
}
function Count({count,setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({setCount}) { 
  const count = useContext(CountContext);
  return <div>
    <button onClick = {() => {
        setCount(count + 1);
    }}> Increase </button>

    <button onClick= {() => {
        setCount(count -1);
    }}> Decrease </button>
  </div>
}
export default App