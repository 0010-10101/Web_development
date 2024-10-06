/* 2:39:37 */


// example of promisified function and the flow of execution
console.log("at the top 1.");
function promisifiedTimeout()
{
    console.log("Function called 3.");
    return new Promise(function(resolve)
{
    console.log("inside Promise callback 4.");
    setTimeout(function()
    {
        console.log("setTimeout called 5.");
        resolve("done baby ! I am burnt out.");
    },5000);
});
}
console.log("in the middle 2.");
promisifiedTimeout().then(function (value)
{
    console.log("promisified then 6.");
    console.log(value);
});