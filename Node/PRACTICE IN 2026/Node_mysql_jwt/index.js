const express=require('express'),
app=express();
const bodyParser = require('body-parser');
const db=require('./app');
const cors=require('cors');
const authRoutes=require('./routes/appRoutes');
//middleware
// Middleware
app.use(cors());

// Body Parser Middleware
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Optional (not needed in modern express)
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
app.use('/', authRoutes);
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
