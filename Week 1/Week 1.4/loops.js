function findSum(n)
{
    let ans = 0;
    for(let i = 0 ;i<=n;i++)
    {
        ans = ans + i;

    }
    return ans;
}
const ans2 = findSum(10);
console.log(ans2);

const ans3 = findSum(100);
console.log(ans3);

const ans4 = findSum(1000);
console.log(ans4);