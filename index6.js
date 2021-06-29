//explain middleware
//and request.body

const express = require('express')
const app = express()

//changes
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//app.use is written to run middleware
// middleware comes inbetween client and server
// so, if client sends something, first this is run

//these lines make the respose readable to the server

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

//changes

// app.get('/add', (req,res) =>{
//     res.send('This is a get request')
// })

//changes for req.body
// app.post('/add', (req,res) =>{
//     res.send('This is a post request')
// })
app.post('/add', (req,res) =>{
        console.log(req.body)
        res.send('check the console')
})

app.listen(4000, ()=>{
    console.log('Server running')
})