// dumb way of doing input validation and authentication.
const express = require ("express");        //importing the library
const app = express();                         

app.get("/health-checkup", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != "harkirat" ||  password != "pass"){
        res.status(400).json({msg : "Somethings wrong with your inputs."})
        return 
    }

    //do something with kidney here.
    if(kidneyID != 1 && kidneyID != 2){
        res.status(400).json({msg : "Somethings wrong with your inputs."})
        return
    }
    res.json({
        msg : "Your kidney is fine."
    })
});
app.listen(3000);



