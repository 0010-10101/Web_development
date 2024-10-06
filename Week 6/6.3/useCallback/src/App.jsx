import { useEffect, useState, useCallback, useMemo, memo} from "react"

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns:100
    });
  },[])

  useEffect(() => {
    setExchange2Data({
      returns:100
    });
  },[])

  useEffect(()=> {
    setTimeout(() => {
      setBankData({
        income:100
      })
    },5000)    
  }, [])
  //useCallback is not about minimizing the amount of code that is run
  //useCallback is not about rerendering a child component, if the function hasn't /doesn't need to change across renders.
  const calculateCryptoReturns = useCallback(function() {
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data])

  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
      </div>
  )
}
const CryptoGainsCalculator = memo(function({calculateCryptoReturns}) {
  console.log("crypto child re-rendered.")
  return (
    <div>
      Your crypto returns are {calculateCryptoReturns()}
    </div>
  )
})
export default App;