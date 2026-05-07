const express=require('express');
const db=require('../db');
const router=express.Router();


router.post('/insertUser',(req,res)=>{
    const {name,email}=req.body;
    const sql='INSERT INTO users_detail (name,email) VALUES (?,?)';
    db.query(sql,[name,email],(err,result)=>{
        if(err){
            console.log('Error inserting user:',err);
            res.status(500).json({error:'Failed to insert user'});
        }else{
            res.json({message:'User inserted successfully',userId:result.insertId});
        }
    });
})

module.exports = router;
