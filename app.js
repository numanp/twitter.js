const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks')
const routes = require('./routes');
var bodyParser = require('body-parser')
var socketio = require('socket.io');
const server = app.listen(3000);
const io = socketio.listen(server);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public/'))

app.use('/', routes(io));



app.use('/', function(req, res, next){
	const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	next();
});


app.set('view engine', 'html');
app.engine('html', nunjucks.render); 
nunjucks.configure('views', { noCache: true }) 


