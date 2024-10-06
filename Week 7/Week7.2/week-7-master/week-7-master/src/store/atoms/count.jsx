/*
import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});
*/


// writing code by own

// here we have separately defined the state.
//main project no longer needs state i.e App.jsx
import { atom } from "recoil";

//atom expects a single arguments as an input which is an object.
export const countAtom = atom({
    key: "countAtom",
    default: 0
});