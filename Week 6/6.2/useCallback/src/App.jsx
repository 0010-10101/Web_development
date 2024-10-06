import { memo, useState, useEffect, useCallback, useMemo} from "react";
var a=1;

function App() {
  const [counter, setCounter] = useState(0);

  // function a() {
  //   console.log("Hi There!");
  // }

  const a = useCallback(function() {
    console.log("hi there !")
  },[])
  return <div>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
    <Demo a={a} />
  </div>
}

const Demo = memo(function ({a}) {
  console.log("rerender");
  return <div>
    hi there 
  </div>
})
export default App;