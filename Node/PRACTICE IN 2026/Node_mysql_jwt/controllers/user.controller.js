const express=require('express')
const userService=require('../services/userServices');
const addUser = async (req, res) => {
    // res.send("User Added");
    // console.log(req.body);
    //     res.json({
    //     status: true,
    //     data: req.body
    // });
    try{
        const result = await userService.registerService(
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
module.exports={
    addUser,
}