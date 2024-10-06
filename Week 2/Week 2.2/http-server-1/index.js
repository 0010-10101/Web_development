const express = require('express')
const app = express()
const port = 3000


// below code is similar to fs.readFile("path","encoding",some callback function())
app.get('/', function (req, res){                                   
  res.send('Hello World!')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})