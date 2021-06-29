//making db more readable

const express = require('express')
const app = express()

const fs = require('fs')
const filename = './db.json'


app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/add', (req,res) =>{
    
        let user = req.body

        let data = fs.readFileSync(filename)
        let db = JSON.parse(data)
        db.users.push(user)
 
        //changes in jSon.stingify
        //2nd argument is for, if we want to replace anything in the object, null is a replacer
        //'\t' is to give spacing, between different levels.
        fs.writeFile(filename, JSON.stringify(db, null, '\t'), (err) =>{
            if(err) console.log(err)
            res.send('User added!')
        } )
})

app.listen(4000, ()=>{
    console.log('Server running')
})