import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

// export const evenSelector = selector({
//     key: "evenSelector",
//     get: ({get}) => {
//         const count = get(countAtom);
//         return count % 2;
//     }
// });

// Todo creation application with filtering logic
// todos, filter


export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
            return count % 2;
    }
})
// in above , selector we created  it depends on one thing which is a countAtom 
// key is get.
//and a function which is get , inside which we get access to the {get} function  




//assignment 
export const filteredTodos = selector({
    key: "filteredTodos",
    get: (props) => {
        const todos = props.get(todosAtom);
        const filter = props.get(filterAtom);
        return todos.filter(x => x.title.includes(filter) || x.description.includes(filter)); 
    }
})