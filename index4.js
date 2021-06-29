//get and post requests

//first do the changes in this js file, and then
//do the below
//in index.html show action and method attributes in the form
//explain get and post requests

//change /add back to post in index.html
const http = require('http')
const url = require('url')
const fs = require('fs')

function onRequest(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let link = url.parse(req.url, true)
    console.log(link)

    if(link.pathname === '/'){
        fs.readFile('./index.html', (err, data) =>{
            if(err){
                res.end('Error Occured')
            }
            res.write(data)
            res.end()
        })
    }
//changes
    else if(link.pathname === '/add' && req.method === 'GET'){
        res.end('this is get request')
    }
    else if(link.pathname === '/add' && req.method === 'POST'){
        res.end('This is post request')
    }
}

let server = http.createServer(onRequest)
server.listen(4000, ()=>{
    console.log("Server is running...")
})

//--part4 over -- now with express