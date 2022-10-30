require('dotenv').config()
const express = require('express')
const app = express()
app.get('/', function(req, res){
     res.send('Hello Word')
})
app.listen(process.env.PORT, function(){
     console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT)
}
)