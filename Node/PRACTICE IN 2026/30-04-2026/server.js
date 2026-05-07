const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
   // console.log(req);
   // console.log(req.url);
   // console.log(req.method);
   // console.log(req.headers);
   // // console.log(res);
   //process.exit();// this will terminate the server after one request, you can remove this line to keep the server running
   // res.setHeader('Content-Type','text/html');
   // res.write('<html>');
   // res.write('<head><title>My First Server</title></head>');
   // res.write('<body><h1>Hello, World!</h1></body>');
   // res.write('</html>');
   // res.end();
   let url=req.url;
   let method=req.method;
   if(url==='/'){
      res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>My First Server</title></head>');
      res.write('<body><h1>Hello, World!</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
   }
   if(url==='/message' && method==='POST'){
     fs.writeFileSync('message.txt','DUMMY');
     res.statusCode=302;
     res.setHeader('Location','/');
     return res.end();
   }
});
server.listen(3000);