const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../app");
const userModel=require('../models/userModel');

const loginService = async (data) => {
  const { userLoginId, userPassword } = data;
  const user = await userModel.findUserByUserId(userLoginId);
  if (!user) {
    return {
      status: 400,
      message: "Invalid User",
    };
  }
  const isPasswordMatch = await bcrypt.compare(userPassword, user.userPassword);
  if (!isPasswordMatch) {
    return {
      status: 400,
      message: "Invalid password",
    };
  }
  const token = jwt.sign(
    {
      userid: user.userId,
      email: user.emailId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );
  return {
    status: 200,
    message: "Login successful",
    token: token,
    user: {
      userid: user.userId,
      username: user.name,
      email: user.emailId,
    },
  };
};
module.exports = {
  loginService,
};
