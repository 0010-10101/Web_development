// filtering
// what if i tell you , given an input array , give me 
// back all even values from it.



/*

const inputArray = [1,2,3,4,5];
const newArray = [];
for(let i=0;i<inputArray.length;i++)
{
    if(inputArray[i] % 2 == 0)
    {
        newArray.push(inputArray[i]);
    }
}
console.log(newArray);

*/

const inputArray = [1,2,3,4,5,6,7,8,9,10];

const answer = inputArray.filter(function filterLogic (n){          //syntax for filter function.
    if (n % 2 == 0)
    {
        return true;
    }
    else 
    {
        return false ;
    }
})
console.log(answer);



/* example 2 */
const arr = ["harkirat", "sam", "monica"];
const answer2 = inputArray.filter(function filterLogic (n){          //syntax for filter function.
    if (n.startsWith("h"))
    {
        return true;
    }
    else 
    {
        return false ;
    }
})
console.log(answer2);