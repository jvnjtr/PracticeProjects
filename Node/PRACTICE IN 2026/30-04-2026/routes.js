const fs= require('fs');
const requestHandler=(req,res)=>{
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
      const body=[];
      req.on('data',(chunk)=>{
         body.push(chunk);
         console.log(chunk);
         console.log(body);
      });
      req.on('end',()=>{
         const parsedBody=Buffer.concat(body).toString();
         const message=parsedBody.split('=')[1];   
         fs.writeFileSync('message.txt',message);
         console.log(message);
         console.log(body);
      });
     fs.writeFileSync('message.txt','DUMMY');
     res.statusCode=302;
     res.setHeader('Location','/');
     return res.end();
   }
}
module.exports=requestHandler;