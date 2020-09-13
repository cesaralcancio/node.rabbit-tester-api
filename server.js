var express = require('express'),
  app = express(),
  routes = require('./api/routes/todoListRoutes'), //importing route
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// (node:13230) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
// (node:13230) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true , useUnifiedTopology: true });

// parse the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// rgistr the routes
routes(app);

// listen to port
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);