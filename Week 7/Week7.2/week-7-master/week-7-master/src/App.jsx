import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


// in this code base , gotten rid of all context logic
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <Buttons />
    <CountRenderer />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      <i>
      {count}
      </i>
    </b>
    <b><EvenCountRenderer /></b>
  </div>
}

function EvenCountRenderer() {
  const isEven= useRecoilValue(evenSelector);
    return <div>
      {(isEven % 2 == 0) ?  "It is even" : null }
    </div>

}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");
  //inside return syntax of all three do the same things.
  //setCount(count + 1);
  //setCount(c => c + 1);
  //setCount(function(c){
  // return c+1;
  //})

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
