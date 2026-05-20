const express=require('express');
const route=express.Router();
const userController=require('../controllers/user.controller');
const authController=require('../controllers/auth.controller');

// route.post('/register',userController);
// module.exports = route;
// console.log(userController);
route.get('/', (req, res) => {
    res.send('Home Page Working');
});
// route.post('/node/api',(req,res)=>{
//   console.log(req.body);

//     res.json({
//         status: true,
//         data: req.body
//     });

// });
route.post('/node/api/createUser',userController.addUser)
route.post('/node/api/check-email',userController.checkEmail);
module.exports = route;