const fs = require("fs");


// my own asynchronous function
function kiratsReadFile()                                       //line 5to 12 is creating an async function
{
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })    
}


// callback function to call                                // line 15 to 20 is calling an async function.
function onDone(data)
{
    console.log(data);
}
kiratsReadFile().then(onDone);