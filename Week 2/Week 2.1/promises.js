/* Time : 1:10:00 */
// promises are syntatic sugar



/*Example of a async fuction made by my own

const fs = require("fs");
function putCopyrightToFile(cb)
{
fs.readFile("a1.txt","utf-8",function(err,data)
    {
        data = data + "copyright 2024 Sam";
        fs.writeFile("a.txt",function(){
        cb();
        })
    });
}
putCopyrightToFile(function(){
    console.log("copyright has been put.")
})

*/



/*

// in this case nesting looks ugly
setTimeout(function(){
    console.log("Hi There.");
    setTimeout(function(){
        console.log("Inside the second function.");
        setTimeout(function(){
            console.log("Inside the third function");
        },3000)
    },2000)
},1000)

*/

