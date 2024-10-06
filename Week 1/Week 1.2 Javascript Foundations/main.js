const ages = [21,22,23,24,25,26,27,28,29,30,31,32,33,34];
const numberofPeople = ages.length;

for (let i = 0; i< numberofPeople ; i++)
{
    if (ages[i] % 2 == 0)
    {
        console.log(ages[i]);
    }
}