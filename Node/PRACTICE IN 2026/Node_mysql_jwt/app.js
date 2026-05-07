const mysql = require("mysql2/promise");

// const mysql_db=await mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'',
//   database:'node_practice'
// });

// console.log('db_connected Successfully');

//await mysql_db.execute(`CREATE database node_practice`)

const mysqlPool=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  database:'node_practice'
});



module.exports=mysqlPool