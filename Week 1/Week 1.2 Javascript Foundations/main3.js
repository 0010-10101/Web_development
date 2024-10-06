// Callbacks

/*


function sum(num1, num2) {
    let result = num1 + num2;
    //return result;

    displayResult(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const ans = sum(1,2);

*/




/*


// below we will pass in 3rd argument 
function sum(num1, num2, fnToCall) {                                      // passing argument fnToCall 
    let result = num1 + num2;
    //return result;

    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const ans = sum (1,2, displayResult);

// we could solve this only by passing function as an arguement

*/







/*

//new example with function to understand callbacks
//setTimeout 
function greet ()
{
    console.log("Hello World !");
}
setTimeout(greet, 5*1000);                                  // here we get the output after 5 seconds
// story : called a function gave it two arguments 
// first argument is a function iteslef 
// setTimeout is used to call a function after certain duration

*/




function greet(){
    console.log("Hello World");
}

function greetAlien(){
    console.log("Hello Alien");
}

setTimeout ( greetAlien, 4*1000);