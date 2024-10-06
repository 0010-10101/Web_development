const express = require("express");
const app = express();

//introducing a function that returns a boolean if age of the person is more than 14
function isOldEnoughMiddleware (req,res,next){
    const age = req.query.age
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg: "Sorry you are of not age yet.",
        })
    }
}
app.get("/ride1",isOldEnoughMiddleware,function (req,res) {
    if(isOldEnough(req.query.age))
    {
        res.json
        ({
            msg: "You have successfully riden the ride1."
        })
    }
});
app.get("/ride2",isOldEnoughMiddleware, function (req,res)
{
    res.json
    ({
        msg: "You have successfully ridden the ride 2."
    })
});
app.listen(3000)





/*
//very minor change :
// if a certain middleware needs to go on every rooute we can make slight changes in the code
//remove middleware from every endpoint and call it on top .
// note : app.use : only triggers for all the endpoints below app.use.


const express = require("express");
const app = express();

//introducing a function that returns a boolean if age of the person is more than 14
function isOldEnoughMiddleware (req,res,next){
    const age = req.query.age
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg: "Sorry you are of not age yet.",
        })
    }
}
app.use(isOldEnoughMiddleware); 
app.get("/ride1", function (req,res)
{
    res.json
    ({
        msg: "You have successfully ridden the ride 2."
    })
});
app.get("/ride2", function (req,res)
{
    res.json
    ({
        msg: "You have successfully ridden the ride 2."
    })
});

app.listen(3000)
*/