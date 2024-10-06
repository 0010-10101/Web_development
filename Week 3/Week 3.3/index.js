//week 3.3
const jwt = require("jsonwebtoken");
//decode verify and generate
const value = {
  name : "harkirat",
  accountNumber : 123123
}
//will create a jwt from these
const token = jwt.sign(value,"secret");
console.log(token);
//this token has been generated using this secret,and hence this token can only be verified using this secret.


/*
always keep this token hidden from others.

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGF
ya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMsImlhdCI6MTc
yMzA1MzQzOX0.PdYzcM5qwTGK5cTUJ3KKURaW2nE862MDgwd6qz
e0AQg

*/