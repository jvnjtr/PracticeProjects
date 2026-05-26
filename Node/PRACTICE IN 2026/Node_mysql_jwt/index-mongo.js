const http=require('http');
const express=require('express');
const mongoose = require('mongoose');
const app=express();
const cors=require('cors');
const authRoutes=require('./routes/appRoutes');
//middleware
// Middleware
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
app.use('/', authRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/testApplication')
.then(() => {
    console.log('MongoDB Connected');
})
.catch((err) => {
    console.log(err);
});
app.get('/', (req, res) => {
    res.send('Mongo Connected');
});

app.listen(3000, () => {
    console.log('Server running on 3000');
});