const express=require('express'),
app=express();
const db=require('./app');


db.query("SELECT 1")
  .then(data => {
    console.log(data);

    // Start server AFTER DB is connected
    app.listen(3000, () => {
      console.log('Server running at port 3000');
    });
  })
  .catch(err => {
    console.log('Connection failed ' + err);
  });