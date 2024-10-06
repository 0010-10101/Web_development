const express = require('express')
//we don't have access to req.body of the box so we need to import library called bodyParser.
const bodyParser = require("body-parser");
const app = express()

const port = process.env.PORT || 3000
/* to run above command in terminal to change port from 3000 to something else
type below command : 
$env:PORT = 3005
*/


//middlewares.
app.use(express.json());           // syntax to use body parser                 /* earlier used: app.use(bodyParser.json()); */

/*
app.get("/route-handler", function(req,res){
    //headers, body, query parameters
    // do machine learning model (in case of chatgpt)
    res.json({
        name: "sam",
        age: 21,
    })
})
*/


/*
app.post('/', function (req, res){         
    // in terminal while getting authorization big "A" is converted into "a".
  console.log(req.body);
  res.send( ("Hello world from post request !")
  )
})
*/

app.post('/backend-api/conversation',function (req,res)
{
  const message = req.query.message;
  
  //const message  = req.body.message;
  
  console.log(message);
  //machine learning thingy
  res.json({
    output: " 2 + 2 = 4 "
  })
})


/*
app.get('/asd', function (req, res){         
  //in terminal while getting authorization big "A" is converted into "a". 
console.log(req.body);
res.send( ("Hello world from get request!")
)
})
*/

app.listen(port,function (){
  console.log(`Example app listening on port ${port}`)
})  


