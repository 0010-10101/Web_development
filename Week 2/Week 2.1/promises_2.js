/* 1:24:00 */


/*

// promisify this async function

function myownSetTimeout(callback, duration){
    setTimeout(callback, duration)
}

*/





//below is  a promisified function

//defining async function
function promisifymyownSetTimeout(duration){
    
    // promise is just another class in javascript
    // new promise just an instance of that class
    // promise expects 1st argument as function
    // inside the function first argument needs to be resolve
    const p = new Promise(function(resolve){                 
        setTimeout(function(){
            resolve();
        },duration);
    });                                   
    return p;                                               
}

// calling async function 
const ans = promisifymyownSetTimeout(1000);
//console.log(ans);   
ans.then(function(){
    console.log("timeout is done.");
})



/*

myownSetTimeout(function(){
    console.log("Inside setTimeout function.")
},2000)

*/