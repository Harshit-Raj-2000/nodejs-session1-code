// addition of users



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
    //changes
    //accessing request.body
        let user = req.body

        let data = fs.readFileSync(filename)
        let db = JSON.parse(data)

        //changes
        db.users.push(user)
        //right now we have just pushed to variable,
        //we need to save in file as well
        fs.writeFile(filename, JSON.stringify(db), (err) =>{
            if(err) console.log(err)
            res.send('User added!')
        } )
        
        //remove this
        // res.send('check the console')
})

app.listen(4000, ()=>{
    console.log('Server running')
})