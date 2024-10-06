import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`http://localhost:8080/todo?id=${id}`);
      return res.data.todo;
    },
  })
});

// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: selectorFamily({
//     key: "todoSelectorFamily",
//     get: function (id) {
//       return async function ({get}) {
//         const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//         return res.data.todo;
//       }
//     } 
//   })
// });