var db = require('../db');
var helpers = require('../helpers');

exports.homePage = function (req, res) {
	db.list({include_docs: true}, function(err, body) {
		helpers.handleError(err);

		res.render('index', {
			// timeRefresh: true,
			// pollList: req.session.pollList || []
			pollList: body.rows || []
		});
	});
}

exports.newPollForm = function(req, res) {
	res.render('pollForm');
}

exports.addNewPoll = function(req, res) {
	var choices = req.body['poll-choices'].map(function(choice, index) {
		return {
			id: 'choice-' + index,
			answer: choice,
			votedOn: 0,
		}
	});

	var newPoll = {
		question: req.body['poll-question'],
		choices: choices
	}

	db.insert(newPoll, function (err, body, header) {
		helpers.handleError(err);
		
		res.redirect('/');
	});
}

exports.pollDetail = function(req, res) {
	var id = req.params.id;

	db.get(id, function(err, body) {
		helpers.handleError(err);
		res.send(body);
		// res.render('pollDetails');
	});
}