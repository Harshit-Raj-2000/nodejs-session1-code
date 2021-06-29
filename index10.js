//in index.html, show link for /view
//and make route for view

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
        fs.writeFile(filename, JSON.stringify(db, null, '\t'), (err) =>{
            if(err) console.log(err)
            res.send('User added!')
        } )
})

//changes
app.get('/view', (req,res) =>{

    res.writeHead(200, {'Content-Type': 'text/html'})

    let data = fs.readFileSync(filename)
    let db = JSON.parse(data)

    //we have to create a table in html for all the data
    //so, create a table in html, and then use it here
    res.write('<table><tr><th>Name</th><th>Email</th><th>Roll number</th></tr>')
    db.users.forEach(user => {
        res.write(`<tr><td>${user.name}</td><td>${user.email}</td><td>${user.rno}</td></tr>`)
    })
    res.write('</table>')
    res.end()
    
})

app.listen(4000, ()=>{
    console.log('Server running')
})