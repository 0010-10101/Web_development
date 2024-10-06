// complex primitves in js (arrays, objects)


const ages = [21,22,23,24,25,26,100,150];
const numberofPeople = ages.length;
for(let i=0;i<numberofPeople;i++)
{
    if(ages[i] %2==0)
    {
        console.log(ages[i]);
    }
}