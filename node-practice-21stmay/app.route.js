const express=require('express');
const route=express.Router();
const path=require('path');
const myPath=require('./utils/path');

route.get('/add-product',(req,res,next)=>{
    console.log('in another middleware');
     res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
        `);
   
});
route.post('/product',(req,res,next)=>{
    console.log(req.body);
    console.log('in another middleware');
    res.redirect('/');
    
});
route.get('/productPage1',(req,res)=>{
    res.sendFile(path.join(myPath,'views','product.html'));
});
route.get('/productPage',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','product.html'));
});
route.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});

route.get('/',(req,res,next)=>{
    console.log('Hello Worldd');
    res.send('Hello World');
    
    // next();
});
module.exports=route;