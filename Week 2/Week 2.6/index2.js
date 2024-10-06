//map functions examples.

/* traditional way


const inputArray = [1,2,3,4,5];
const newArray = [];
for(let i=0;i<inputArray.length;i++)
{
    newArray.push(inputArray[i] * 2);
}
console.log(newArray)

*/

//map function way

const inputArray = [1,2,3,4,5];
function transform(i){
    return i * 2;
}
const answer = inputArray.map(transform);                       //syntax for map function
console.log(answer);

// or you can write it this way
const answer2 = inputArray.map(function transform(i){
    return i * 3;
})
console.log(answer2);