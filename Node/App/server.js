const http=require('http');//importing a core module for creating a server
const server=http.createServer((request,response)=>{
    console.log(request,response);
});
server.listen(3000);