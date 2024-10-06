import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchangeData, setexchangeData] = useState({});
  const [bankData, setbankData] = useState({});
  console.log("hi there re render.")
  //dummy data it won't get anything.
  useEffect(() => {
    setTimeout(() => {
      setbankData({income: 100});
    }, 3000);
  }, [])
 
  useEffect(() => {
    setTimeout(() => {
      setexchangeData({
        returns: 100
      })
    }, 1000)
  }, [])
  
  
  const incomeTax =  (bankData.income + exchangeData.returns) * 0.3; 

  return (
    <div>
      Hi There ! Your income tax returns are : {incomeTax}
    </div>  
  )
}

export default App
