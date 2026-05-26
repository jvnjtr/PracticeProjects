const mysql = require("mysql2/promise");
require('dotenv').config();

// const mysql_db=await mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'',
//   database:'node_practice'
// });

// console.log('db_connected Successfully');

//await mysql_db.execute(`CREATE database node_practice`)

const mysqlPool=mysql.createPool({
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME
});
module.exports=mysqlPool.promise();