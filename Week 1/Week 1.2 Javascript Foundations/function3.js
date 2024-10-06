//callbacks in function

function sum(num1, num2, fntoCall)
{
    let result = num1 + num2;
    fntoCall(result);
}
function displayResult(data)
{
    console.log("Result of the sum is :"+data);
}

function displayResultPassive(data)
{
    console.log("Sum's result is : "+ data); 
}

const ans = sum(1,2,displayResult);

//these are called callbacks