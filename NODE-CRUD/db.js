const mysql2=require('mysql2');
const db=mysql2.createConnection({
    'host':'127.0.0.1',
    'user':'root',
    'password':'',
    'database':'nodejs_crud'
});

db.connect((err)=>{
    if(err){
        console.log('Database connection failed');
    }else{
        console.log('Database connected successfully');
    }
});

module.exports=db;