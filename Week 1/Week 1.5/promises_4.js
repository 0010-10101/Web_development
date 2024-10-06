//what is a promise : simple definition
/* it is just a class that makes callbacks and async functions slightly more readable.

*  Whenever u create it, you need to pass in a function 
as the first argument which has to resolve as the 
first argument .

*/

// simple promise that immediately resolves


let p = new Promise(function(resolve){
    resolve("Hi There !");
})
p.then(function(){
    console.log(p);
})