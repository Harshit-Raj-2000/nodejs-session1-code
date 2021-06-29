//file rendering


const http = require('http')
const url = require('url')
//changes
const fs = require('fs')
//fs stands for file system

function onRequest(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let link = url.parse(req.url, true)
    console.log(link)
//changes
    if(link.pathname === '/'){
        //output index.html
        fs.readFile('./index.html', (err, data) =>{
            if(err){
                res.end('Error Occured')
            }
            res.write(data)
            res.end()
        })
    }
    else if(link.pathname === '/add'){
        res.end('this is /add')
    }
    else if(link.pathname === '/sub'){
        res.end('This is /sub')
    }
}

let server = http.createServer(onRequest)
server.listen(4000, ()=>{
    console.log("Server is running...")
})

//part3 over