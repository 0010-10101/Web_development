
//write basic express boiler plate code
// with express.json() middleware

const express = require("express");
const { createTodo , updateTodo } = require("./types") ;
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
//inputs :
// title : String,
// description : String
// we need to validate inputs we need to create zod, create a new file call it types.js
app.post("/todo", async function(req,res){
    // here we are adding validation.
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs.",
        })
        return;
    }
    //put it in mongodb
    await todo.create ({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})
app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })

    // const todo =  todo.find({});             //error is present here.
    // console.log(todos);                         //this will log as a promise
    //todo.find(); actually needs to hit the database.
    //if I am currently in India and my MongoDB database might be in USA
    // we need to await for the todos to come back to us.
    // if you don't , then what you are getting in the todos object is not the actual data
    // its a promise that will eventually resolve with data.
})
app.put("/completed", async function(req,res){
    // here we are adding validation.
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs.", 
        })
        return
    }
    await todo.update({                                                                                  
        _id: req.body.id                                    
    },
    {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed."
    })
})
console.log("reached end of the file");
app.listen(3000);
//this is a non authenticated app.
//after this create mongodb schema if the inputs are correct actually putting something 
//in mongodb , updating and getting todos from mongodb.
