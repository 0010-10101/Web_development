//create a promise of own 
// we can create wrapper






const fs = require("fs");
//my own asynchronous function
function kiratsReadFile(cb)
{
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
}


//callbakc function to call
function onDone (data)
{
    console.log(data);
}
kiratsReadFile(onDone);