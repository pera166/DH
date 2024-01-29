const express = require('express')
const app = express()
const path = require('path')

const port=process.env.port || 3001;
app.listen(port, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/home.html'))
})
app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, 'views/login.html'))
})
app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, 'views/register.html'))
})