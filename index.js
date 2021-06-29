// what is backend, what is nodejs

// create folder -> terminal

// npm init -y

//http is an internal module

//sever in nodejs
const http = require('http')

function onRequest(req, res){
    // later -- res.writeHead(200, {'Content-Type': 'text/html'})
    // later -- res.writeHead(200, {'Content-Type': 'text/plain'})
    //res.write('<h1>hello from node</h1>')
    res.write('hello from node')
    res.end()
}

let server = http.createServer(onRequest)
server.listen(4000, ()=>{
    console.log("Server is running...")
})
//this is a port number

//run file using node index
//localhost:4000, 127.0.0.1:4000

// to stop server from running again and again, show nodemon installation
//npm install -G

// --first part done --

