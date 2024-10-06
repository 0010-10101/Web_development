import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  //syntax-2
  default: id => {
    let foundTodo = null;
    for(let i=0;i<TODOS.length;i++){
      if(TODOS[i].id === id){
        foundTodo = TODOS[i]
      }
    }
    return foundTodo;
  },
  //syntax-2
  // default: id => {
  //   return TODOS.find(x => x.id === id)
  // },
});



/*
import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todoAtomFamily = atomFamily({
key: 'todosAtomFamily',
default: id => {
  return TODOS.find(x => x.id === id)
  },
})
*/