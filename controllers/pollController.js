var db = require('../db');

exports.homePage = function (req, res) {
	console.log('HomePage');
	db.list({include_docs: true}, function(err, body) {
		if (err) {
			res.send('Sry error');
		}
		// res.send(body.rows);
		res.render('index', {
			// timeRefresh: true,
			// pollList: req.session.pollList || []
			pollList: body.rows || []
		});
	});
	
	// db.get('foo', function(err, body) {

	// 	console.log(err);
		
	// 	// db.destroy(body._id, body._rev, function() {
	// 		// res.send('destroyed')
	// 	// })
	// 	res.send(body._id);
	// })
}

exports.newPollForm = function(req, res) {
	console.log('New poll form');
	res.render('pollForm');
}

exports.addNewPoll = function(req, res) {
	var newPoll = {
		question: req.body['poll-question'],
		choices: req.body['poll-choices']
	}

	db.insert(newPoll, function (err, body, header) {
		if(err) { return res.send(err.message, err['status-code']); }
		
      // res.send("Insert ok!", 200);
		res.redirect('/');
	});


	// req.session.pollList.push({name: req.body['poll-question'], entries: 44})
	
}