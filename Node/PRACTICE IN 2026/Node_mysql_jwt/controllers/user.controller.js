const express=require('express')
const userService=require('../services/userServices');
const addUser = async (req, res) => {
    try{
        const result = await userService.registerServicemongo(
           req.body
       );
       res.status(200).json(result);
    }catch(error){
         res.status(400).json({
           status: 400,
           message: error.message,
           result:''
       });
    }
};

    const checkEmail = async (req, res) => {
        try{
        const result = await userService.checkEmailService(req.body.emailId);
        res.status(200).json(result);
        }catch(error){
            res.status(400).json({
                status: 400,
                message: error.message,
                result:''
            });
        }
    }
const getTotalUser = async (req, res) => {
    try{
        const result = await userService.getTotalUserService();
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({
            status: 400,
            message: error.message,
            result:''
        });
    }
}
module.exports={
    addUser,
    checkEmail,
    getTotalUser
}