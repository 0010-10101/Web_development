//mongodb stuff.
//creating schema for our project
/* 
    my Mongodb url :

    mongodb+srv://sahilthool12:xm69LvkEm8mRRpl8@cluster0.bu0ayjc.mongodb.net/

*/
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sahilthool12:xm69LvkEm8mRRpl8@cluster0.bu0ayjc.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}