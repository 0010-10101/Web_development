const express = require ("express");
const app = express();

const users = [{
    name : "harkirat",
    kidneys : [{                //default state.
        healthy : false
    }]  
}]


//middlewares 
app.use(express.json());

app.get("/",function (req,res)
{
    const harkiratKidneys = users[0].kidneys;
    const numberofKidneys = harkiratKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i=0;i<harkiratKidneys.length;i++)
    {
        if(harkiratKidneys[i].healthy)
        {
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthykidneys = numberofKidneys-numberofHealthyKidneys;

    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthykidneys
    })
})

app.post ("/",function(req,res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })
})


app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})


// removing all unhealthy kidneys 
app.delete("/",function(req,res)
{
    //you should return a 411
    // only if atleast  one unhealthy kidney is there do this, else return 411
    if(atleastOneUnhealhtyKidney())
    {
        const newKidneys = [];  
        for(let i=0;i<users[0].kidneys.length;i++)
        {
            if(users[0].kidneys[i].healthy)
            {
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg : "done."})
    }
    else{
        res.sendStatus(411).json({
            msg : "You have no bad kidneys."
        })
    }    
    
})

function atleastOneUnhealhtyKidney(){
let atleastOneUnhealhtyKidney = false;
for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(!users[0].kidneys[i].healthy){
            newKidneys.push({
                atleastOneUnhealhtyKidney : true
            })
        }
    }
    return atleastOneUnhealhtyKidney
}

app.listen(3000);