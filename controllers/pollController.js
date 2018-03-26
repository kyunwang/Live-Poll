var db = require('../db');

exports.homePage = function (req, res) {
	db.list({include_docs: true}, function(err, body) {
		if (err) {
			res.send('Sry error');
		}
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
	var newPoll = {
		question: req.body['poll-question'],
		choices: req.body['poll-choices']
	}

	db.insert(newPoll, function (err, body, header) {
		if(err) { return res.send(err.message, err['status-code']); }
		
		res.redirect('/');
	});
}

exports.pollDetail = function(req, res) {
	res.send('poll details');
}