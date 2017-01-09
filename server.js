let express = require('express');
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');

let Todo = require('./model');

let app = express();
let port = process.env.PORT || 8081;

mongoose.connect('mongodb://bbier:bbier@ds149998.mlab.com:49998/redux-app');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// app.all('/todos', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/',function(req,res){
		res.send('Hello to the todos');
});

app.get('/todos',function(req,res){
	Todo.find({},function(err,todos){
		res.send(todos);
	})
});

app.post('/todo',function(req,res){
	let data = Object.keys(req.body)
	let newTodo = new Todo();
	
	newTodo.task = data[0]

	newTodo.save(function(err){
		if(err){
			throw err;
		}
	})
	Todo.find({},function(err,todos){
		res.send(todos);
	})

})

app.listen(port);

console.log('Server is now running on localhost: ' + port);