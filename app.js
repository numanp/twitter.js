const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan')

app.use(function(req, res, next){
	res.send('<h1>main page</h1>');
	next();
});

//morgan(':method :url :status :res[content-length] - :response-time ms')

app.use('/special', function(req, res, next){
	console.log('llegaste a un lugar especial');
	res.send('<h1>llegaste a un lugar especial</h1>')
	next();
});

console.log(chalk.blue('Hello World'))

app.listen(3000);