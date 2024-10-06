/*
anonymous function : we can literally pass a function inside another function 
qs a third argument.
*/
function square(n)
{
    return n*n;
}
function cube(n)
{
    return n*n*n;
}
/*
function sumofSquares(a,b)
{
    const val1 = square(a);
    const val2 = square(b);
    return val1+val2;
}*/
function sumofsomething(a,b,fn)
{
    const val1 = fn(a);
    const val2 = fn(b);
    return val1+val2;
}

const ans = sumofsomething(1,1,function(n){
    return n*n*n;
});
console.log(ans)

