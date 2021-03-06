// installing express
//terminal -> npm install express --save
// --save means we want to install it locally

const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/add', (req,res) =>{
    res.send('This is a get request')
})

app.post('/add', (req,res) =>{
    res.send('This is a post request')
})

app.listen(4000, ()=>{
    console.log('Server running')
})
