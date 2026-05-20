const db=require('../app');
const createUser=async(name,emailId,mobile,gender,address,userLoginId,userPassword)=>{
    console.log({
    name,
    emailId,
    mobile,
    gender,
    address,
    userLoginId,
    userPassword
});
    const sql=`INSERT INTO user_master (name,emailId,mobile,gender,address,userLoginId,userPassword)values(?,?,?,?,?,?,?)`;
    const[result]=await db.execute(sql,[
        name,
        emailId,
        mobile,
        gender,
        address,
        userLoginId,
        userPassword
    ]);
    return result;

}
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
   findUserByUserId
};

