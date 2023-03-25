const express = require('express');
const app = express();
const User_route = require('./app/routes/appRoutes')
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
app.listen(port);
console.log("mongodb connected & app is listening on port: " + port);
})
.catch((error)=>{
    console.log(error);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });

app.use('/', User_route)

