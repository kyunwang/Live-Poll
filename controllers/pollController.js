var db = require('../db');
var h = require('../helpers');

exports.homePage = function (req, res) {
	db.list({include_docs: true}, function(err, body) {
		h.handleError(err);

		res.render('pollOverview', {
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
		h.handleError(err);
		
		res.redirect('/');
	});
}

exports.getPoll = function(req, res) {
	var id = req.params.id;

	db.get(id, function(err, body) {
		h.handleError(err);
		// res.send(body);
		res.render('pollDetails', {
			timeRefresh: true,
			poll: body
		});
	});
}

exports.votePoll = function(req, res) {
	var id = req.params.id;

	var selectedChoice = req.body['poll-choice'];
	
	db.update(id, selectedChoice, function() {
		res.redirect('/poll/' + id);
	});
}


