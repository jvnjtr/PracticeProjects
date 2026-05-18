const http=require('http');
const fs=require('fs');
const requestHandler=require('./routes');
// const server=http.createServer((req,res)=>{
//    // console.log(req);
//    // console.log(req.url);
//    // console.log(req.method);
//    // console.log(req.headers);
//    // // console.log(res);
//    //process.exit();// this will terminate the server after one request, you can remove this line to keep the server running
//    // res.setHeader('Content-Type','text/html');
//    // res.write('<html>');
//    // res.write('<head><title>My First Server</title></head>');
//    // res.write('<body><h1>Hello, World!</h1></body>');
//    // res.write('</html>');
//    // res.end();
   
// });
const server=http.createServer(requestHandler);
server.listen(3000);