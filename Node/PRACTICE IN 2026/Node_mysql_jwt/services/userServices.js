const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const registerService = async (data) => {
  const { name, emailId, mobile, gender, address, userLoginId, userPassword } =
    data;
  const checkExistingUserByemail = await userModel.findUserByEmail(emailId);
  if (checkExistingUserByemail) {
    throw new Error("Email already exists");
  }
  const checkExistingUserByuserId =
    await userModel.findUserByUserId(userLoginId);
  if (checkExistingUserByuserId) {
    throw new Error("userId already exists");
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(userPassword, 10);
  let result = await userModel.createUser(
    name,
    emailId,
    mobile,
    gender,
    address,
    userLoginId,
    hashedPassword,
  );
  return {
    status: 200,
    message: "User Registered Successfully",
    result: result.insertId,
  };
};
const checkEmailService = async (emailId) => {
  const user = await userModel.findUserByEmail(emailId);
  if (user) {
    return {
      status: 400,
      message: "Email checked successfully,user Exist",
      result: user,
    };
  } else {
    return {
      status: 200,
      message: "Email not found",
      result: "",
    };
  }
};
module.exports = {
  registerService,
  checkEmailService,
};
