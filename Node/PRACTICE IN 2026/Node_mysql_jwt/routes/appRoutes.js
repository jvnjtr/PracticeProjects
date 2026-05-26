const express=require('express');
const route=express.Router();
const userController=require('../controllers/user.controller');
const authController=require('../controllers/auth.controller');
const authMiddleware=require('../middleware/authMiddleware');
const jwtMiddleware=require('../middleware/jwtMiddleware');

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
route.post('/node/api/userLogin',authMiddleware, authController.userLogin)
route.post('/node/api/createUser',authMiddleware, userController.addUser)
route.get('/node/api/getTotalUser',jwtMiddleware, userController.getTotalUser)
route.post('/node/api/check-email',authMiddleware, userController.checkEmail);
module.exports = route;