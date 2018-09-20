module.exports = function (io) {

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( { name: name } );
  res.render( 'index', { tweets: list, showForm:true, nombre: name } );

});


router.post('/tweets', function(req,res){
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text)
	res.redirect('/')
})

router.get('/tweet/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find( { id: parseInt(id) } );
  res.render( 'index', { tweets: list } );

});

router.get('/form', function(req, res) {
  res.render( 'index', { showForm: true } );
});

return router;
};


