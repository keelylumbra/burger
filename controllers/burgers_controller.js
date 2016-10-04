/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burgers.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burgers.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// router.post('/burgers/create', function (req, res) {
// 	burgers.insertOne(['burgers','name', false], [req.body.name, req.body.], function () {
// 		res.redirect('/cats');
// 	});
// });

// router.put('/cats/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	burgers.update({ sleepy: req.body.sleepy }, condition, function () {
// 		res.redirect('/cats');
// 	});
// });

// router.delete('/cats/delete/:id', function (req, res) {
// 	var id = req.params.id;
// 	cat.delete(id, function () {
// 		res.redirect('/cats');
// 	});
// });

module.exports = router;
