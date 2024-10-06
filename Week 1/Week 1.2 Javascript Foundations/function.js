/*

function sum(num1,num2,fnToCall)
{
    let result = num1+num2;
    fnToCall(result);
}
function displayResult(data)
{
    console.log("Result of the sum is " + data);
}
function displayResultPassive(data)
{
    console.log("sum's result is: "+ data);
}
const ans = sum (1,2, displayResult);

*/





/*

function calculateArithmetic(a,b, type)
{
    if (type == "sum")
    {
        const value = sum(a,b);
        return value;
    }
    if (type == "minus")
    {
        const value = sub(a,b);
        return value;
    }
}
function sum(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
const value = calculateArithmetic(1,2,"minus");
console.log(value);


*/



function calculateArithmetic(a,b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}

function sum (a,b){
    return a+b;
}

const value = calculateArithmetic(1,2,sum);
console.log(value); 