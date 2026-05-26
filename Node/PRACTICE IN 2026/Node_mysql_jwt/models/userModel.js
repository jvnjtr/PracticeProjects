const db = require("../app");
const User = require('../controllers/mongo-models/user');
const createUser = async (
  name,
  emailId,
  mobile,
  gender,
  address,
  userLoginId,
  userPassword,
) => {
  console.log({
    name,
    emailId,
    mobile,
    gender,
    address,
    userLoginId,
    userPassword,
  });
  const sql = `INSERT INTO user_master (name,emailId,mobile,gender,address,userLoginId,userPassword)values(?,?,?,?,?,?,?)`;
  const [result] = await db.execute(sql, [
    name,
    emailId,
    mobile,
    gender,
    address,
    userLoginId,
    userPassword,
  ]);
  return result;
};
const createUserMongo = async (
    userId,
  name,
  emailId,
  mobile,
  gender,
  address,
  userLoginId,
  userPassword,
) => {
  console.log({
    userId,
    name,
    emailId,
    mobile,
    gender,
    address,
    userLoginId,
    userPassword,
  });
  //now insert to mongoDB
  const user = new User({

        userId: userId,
        name: name,
        gender: gender,
        mobile: mobile,
        address: address,
        emailId: emailId,
        userLoginId: userLoginId,
        userPassword: userPassword

    });

   let result= await user.save();
  //now insert to mongoDB
  return result;
};
const findUserByEmailmongo = async (emailId) => {
  const user = await User.findOne({
      emailId: emailId
   });
   return user;
};
const findUserByUserIdmongo = async (userLoginId) => {
   const user = await User.findOne({
      userLoginId: userLoginId
   });
   return user;
};
const findUserByEmail = async (emailId) => {
  const sql = `
       SELECT * FROM user_master
       WHERE emailId=?
   `;
  const [rows] = await db.execute(sql, [emailId]);
  return rows[0];
};
const findUserByUserId = async (userLoginId) => {
  const sql = `
       SELECT * FROM user_master
       WHERE userLoginId=?
   `;
  const [rows] = await db.execute(sql, [userLoginId]);
  return rows[0];
};

const findUserByEmailId = async (emailId) => {
  const sql = `
        SELECT * FROM user_master
        WHERE emailId=?
    `;
  const [rows] = await db.execute(sql, [emailId]);
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUserId,
  createUserMongo,
  findUserByEmailmongo,
  findUserByUserIdmongo
};
