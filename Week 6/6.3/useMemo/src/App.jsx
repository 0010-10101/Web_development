import { useEffect, useState, useMemo} from "react"

function App() {
const [exchange1Data, setExchange1Data] = useState({});
const [exchange2Data, setExchange2Data] = useState({});
const [bankData, setBankData] = useState({});

useEffect (() => {
  setExchange1Data({
    returns: 100
  })
},[])

useEffect (() => {
  setExchange2Data({
    returns: 100
  })
},[])

useEffect (() => {
  setBankData({
    income: 100
  },5000)
},[])

const cryptoReturns = useMemo(()=>{
  console.log("hi there , before");
  return exchange1Data.returns + exchange2Data.returns;
}, [exchange1Data, exchange2Data]);

const incomeTax = (cryptoReturns + bankData.income) * 0.3;

return (
  <div>
    Hi There ! from your income tax returns are {incomeTax}
  </div>
)
}

export default App;