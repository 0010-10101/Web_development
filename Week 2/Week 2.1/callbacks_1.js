//dry : don't repeat yourself 
/*function square(n)
{
    return n*n;
}
function cube(n)
{
    return n*n*n;
}

function sumofsquare(a,b,fn)
{
    let value1 = square(a);
    let value2 = square(b);
    return value1 + value2;
}

function sumofcube(a,b,fn)
{
    let value1 = cube(a);
    let value2 = cube(b);
    return value1 + value2;
}
let solution = sumofSomething(32,3,sumofcube);
console.log(solution);  */


function square(n)
{
    return n*n;
}
function cube(n)
{
    return n*n*n;
}
// making below function generic is called callback
// passing function as an argument is called callbacks

function sumofSomething(a,b,fn)
{
    let value1 = fn(a);
    let value2 = fn(b);
    return value1 + value2;
}
let ans = sumofSomething(3,3,cube);
console.log(ans);


