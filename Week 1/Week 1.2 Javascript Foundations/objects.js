const allUsers = [
{
    firstName : "harkirat", 
    gender : "male"
}, 
{
    firstName : "sam",
    gender : "male"
},
{
    firstName : "bipasha",
    gender : "female"
},
{
    firstName : "johndoe",
    gender : "male"
}
];

for(let i=0; i<allUsers.length;i++)
{
    if(allUsers[i]["gender"]=="male")
    {
        console.log(allUsers[i]["firstName"]);
    }
}