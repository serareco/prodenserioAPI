// Dependecies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
//mongoose.connect('mongodb://localhost/prodenserio');
mongoose.connect('mongodb://admin:admin@ds037283.mongolab.com:37283/prodenserio');

// Express
//CORS middleware
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "prodenserio.com.ar");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',require('./routes/api'));

// Start server
//app.listen(3000);
app.listen(process.env.PORT || 3000);
console.log('Server is running at port '+process.env.PORT);
