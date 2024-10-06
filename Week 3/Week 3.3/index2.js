//file for intruder in the bank

const jwt = require("jsonwebtoken");
const contents = {
    "name" : "harkirat",
    "accountNumber" : 123123,
    "iat" : 1703108524
}
const newToken = jwt.sign(contents,"hsdhdhdash");
console.log(newToken);

/*

try to match the token from index.js and the token present below which is of index2.js both are different 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjo
iaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMsImlhd
CI6MTcwMzEwODUyNH0.M_nbHG_p2Dv_INsFDAsQVgqN40-Kukb
y2TUW5_4ZnTY

*/
