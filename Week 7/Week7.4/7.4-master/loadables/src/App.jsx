// below code for useRecoilStateLoadable
// import './App.css'
// import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
// import { todosAtomFamily } from './atoms';

// function App() {
//   return <RecoilRoot>
//     <Todo id={1}/>
//     <Todo id={2} />
//   </RecoilRoot>
// }

// function Todo({id}) {
//    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
//    //{
//    //   contents
//    //   state
//    //}
//    if (todo.state === "loading") {
//       return <div>
//         loading...
//       </div>
//    }
//    else if (todo.state === "hasValue") 
//     {
//       return (
//         <>
//           {todo.contents.title}
//           {todo.contents.description}
//           <br />
//         </>
//       )
//     }
// }

// export default App



//below code for useRecoilValueLoadable
import './App.css'
import { RecoilRoot, useRecoilValueLoadable , useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3}/>
    <Todo id={4}/>
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValueLoadable(todosAtomFamily(id));
   //{
   //   contents
   //   state
   //}
   if (todo.state === "loading") {
      return <div>
        loading...
      </div>
   }
   else if (todo.state === "hasValue") 
    {
      return (
        <>
          {todo.contents.title}
          {todo.contents.description}
          <br />
        </>
      )
    }
    else if(todo.state === "hasError") {
      return <div>
        Error while getting data from backend
      </div>
    }
}

export default App
