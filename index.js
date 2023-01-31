var http=require('http');
var url=require('url');
var fs=require('fs');
const { doesNotMatch } = require('assert');
http.createServer(function(req,res){
    if(req.url=='/'){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
    }
    else if(req.url=='/investor'){
        fs.readFile('investor-relation.html',function (err,data){
           res.writeHead(200,{'content-type':'text/html'});
           res.write(data);
           return res.end();
        } )
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        req.end('404 error page does Not exits');
    }
}).listen(8080);