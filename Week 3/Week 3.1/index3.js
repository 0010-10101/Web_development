//learning global catches 
//timestamp  :  1:05:49
const express = require ("express");
const app = express();
app.use(express.json());
app.post("/health-checkup", function(req,res){
        //kidneys = [1,2]
        const kidneys = req.body.kidneys;

        /*
        const kidneyLength = kidneys.length;
        */

        res.send(" you have " + kidneyLength + " kidneys. ")
});

//this is the global catches part.
app.use(function (err, req, res, next) {
    res.json({
        msg : "Sorry something is wrong with the server."
    })
});

app.listen(3000);