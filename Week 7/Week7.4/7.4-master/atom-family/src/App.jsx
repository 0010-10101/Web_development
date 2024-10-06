/*
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
*/



import './App.css'
import { useEffect } from "react";
import { RecoilRoot, useRecoilValue,useSetRecoilState, useRecoilState } from "recoil";
import { todosAtomFamily } from './atoms';


function App() {

return (
  <RecoilRoot>
    <UpaterComponent />
    <Todo id={1}/>
    <Todo id={2}/>
    <Todo id={3}/>
    <Todo id={4}/>
    <Todo id={5}/>
    <Todo id={5}/>
    <Todo id={6}/>
    <Todo id={2}/>
    <Todo id={2}/>
    <Todo id={2}/>
    <Todo id={2}/>
  </RecoilRoot>
)
}
function UpaterComponent() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(()=> {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "new todo",
        description: "new todo"
      })
    },5000)
  }, [])  
  
  return <div>

  </div>
}
function Todo({id}) {

  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
      
    </>
  )
}
export default App