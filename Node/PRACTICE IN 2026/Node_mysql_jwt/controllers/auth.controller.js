const express=require('express');
const authService=require('../services/authServices');
const userLogin=async (req,res)=>{
    try{
        const {userLoginId,userPassword}=req.body;
        const user = await authService.loginService({ userLoginId, userPassword });
        res.status(200).json({
            status: 200,
            message: 'Login successful',
            result: user
        });
    }catch(error){
        res.status(400).json({
            status: 400,
            message: error.message,
            result:''
        });
    }
}

module.exports={
    userLogin
}