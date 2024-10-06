// program to understand what is try and catch 
//throwing and catching errors in js
/*

function getLength(name){
    return name.length;
}
const answer = getLength("");
console.log(answer);

*/


/*
let a;
console.log(a.length);
console.log("hi there.");
*/


try {
    let a;
    console.log(a.length);
    console.log("hi there from inside the try block.");
}
catch(e){
    console.log("inside catch statement.")
}
//try catch syntax