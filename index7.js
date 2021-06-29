//storing data in json file instead of a db
//create db.json
//and reading data from json file

const express = require('express')
const app = express()

//changes
const fs = require('fs')
const filename = './db.json'


app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/add', (req,res) =>{
        //changes
        //explain synchronous
        //just for showing a difference, we use this
        let data = fs.readFileSync(filename)
        console.log(data)
        //after consoling we are getting data that is not in a usable format
        //so we need to parse it into json
        let db = JSON.parse(data)
        console.log(db)
        res.send('check the console')
})

app.listen(4000, ()=>{
    console.log('Server running')
})