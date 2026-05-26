const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
const route=require('./app.route');
app.use('/',route);


//route should be written before listen method
app.use((req,res,next)=>{
    console.log('in another middleware');
    res.status(404).send('<h1>Page Not Found</h1>');
});
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
});

