const fs = require("fs");      
//filesystem module 
// external  library  in nodejs, required to read and write from a file


fs.readFile("a.txt","utf-8",function(err,data,)                 
{
    console.log(data);                                          
})   
//here "function" is an anonymous function
// utf-8 is the encoding : various way to read file                                      
// in form of bits / or bytes                         
// a.txt is the path
//fs.readFile is a asynchronous function
console.log("hi there !");
let a=0;
for(let i=0;i<1000000000;i++)
{
    a++;
}
console.log("hi there ! 2");