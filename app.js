const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks')


// app.use(function(req, res, next){
// 	res.send('<h1>main page</h1>');
// 	next();
// });

//morgan(':method :url :status :res[content-length] - :response-time ms')

app.use('/', function(req, res, next){
	console.log('llegaste a un lugar especial');
	const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	next();
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true }) // apunta a nunjucks al directorio correcto para los templates


console.log(chalk.blue('Hello World'))

app.listen(3000);