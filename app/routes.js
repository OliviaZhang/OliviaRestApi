var Author = require('./models/author');

module.exports = function(app) {
	var express = require('express');

	var router = express.Router();

	var quotes = [
	              { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
	              { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
	              { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
	              { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
	            ];

	app.get('/quote', function(req, res) {
		res.json(quotes);
	});

	app.get('/quote/:id', function(req, res) {
		res.json(quotes[req.params.id]);
	});

	app.post('/quote', function(req, res) {	
		if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
			res.statusCode = 400;
			return res.send('Error: wrong format of post');
		}
		
		var newQuote = {
			author: req.body.author,
			text: req.body.text
		}

		quotes.push(newQuote);
		res.json(quotes);
		
		var olivia = new Author({
			author: req.body.author,
			text: req.body.text
		});

		olivia.save(function(err) {
			if (err) throw err;
			console.log("Saved successfully!");
		});
	});

};