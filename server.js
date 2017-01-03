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

app.get('/',function(req,res){
		res.send('Hello to the todos');
});

app.get('/todos',function(req,res){
	Todo.find({},function(err,todos){
		res.send(todos);
	})
});

app.post('/todo',function(req,res){
	let newTodo = new Todo();
	newTodo.task = req.body.task

	newTodo.save(function(err){
		if(err){
			throw err;
		}
		return res.send(newTodo)
	})

})

app.listen(port);

console.log('Server is now running on localhost: ' + port);