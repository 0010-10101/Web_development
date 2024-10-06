
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App;





/*
import { useCallback, useMemo, useState, useEffect , useRef } from "react"

function App() {
  const [incomeTax , setIncomeTax] = useState(20000);
  useEffect(()=> {
    setTimeout(() => {
      document.getElementById("incomeTaxContainer").innerHTML = 10
    }, 5000);
  }, [])

  return (
    <div>
      Hi There, your income tax returns are <div id="incomeTaxContaier">{incomeTax}</div>
    </div>
  )
}
export default App;
*/