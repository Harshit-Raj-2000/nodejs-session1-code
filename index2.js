//routing, show nothing happens if we go to different routes.

const http = require('http')
const url = require('url')


function onRequest(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let link = url.parse(req.url, true)
    //true used to convert url to json format
    console.log(link)
    //show the console when browser is refreshed with a pathname

    if(link.pathname === '/add'){
        res.end('this is /add')
    }
    else if(link.pathname === '/sub'){
        res.end('This is /sub')
    }
    // res.write('<h1>hello from node</h1>')
    // res.end()
}

let server = http.createServer(onRequest)
server.listen(4000, ()=>{
    console.log("Server is running...")
})