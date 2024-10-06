/*
For arrays 
const personArray = ["sam", "sahil", "mayur", "vrushali"];
const genderArray = ["male", "male", "male", "female"];
const numberofUsers = personArray.length;
for( let i = 0;i<numberofUsers ; i++)
{
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}

*/


/* For objects */

/*

const user1 =
{
    firstName: "Sam",
    gender: "Male"
}


console.log (user1["firstName"])                // use to access a key of the object 

*/


/*


const allUsers = {
    {
        firstName : "Sam",
        gender : "Male"
    },
    {
        firstName : "Aditya",
        gender : "Male"
    },
    {
        firstName : "Supriya",
        gender : "Male"
    }
}
for ( let i = 0 ;i<allUsers.length; i++)
{
    if(allUsers[i]["gender"] == "Male")
    {
        console.log(allUsers[i]["firstName"])
    }
}

*/

/*
// functions


function sum(a,b){
    const sumValue = a+b;
    return sumValue;
}
const value = sum(4,44);

const value2 = sum(10,20);
console.log(value);
console.log(value2);

*/



/*

let sum = 0;                                    
// Question : 
//why does only single core is used for running infinite number of loops in javascript and 
//100 percent and the program takes lot of time to run.

//answer is htop is not tracking properly
//use top it  is appropriate.....

for (let i = 0;i<1000;i++){
    sum = sum + i;
}
console.log(sum);

*/


/*
// Callbacks

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
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
displayResult(ans);
*/