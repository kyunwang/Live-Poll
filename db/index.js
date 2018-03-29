var nano = require('nano')(process.env.DB_PORT);
var db = nano.use(process.env.DB_NAME);

var h = require('../helpers');

db.update = function(id, selectedChoice, callback) {
	db.get(id, function(err, body) {
		h.handleError(err);

		var choices = body.choices.map(function(choice, index) {
			return {
				id: 'choice-' + index,
				answer: choice.answer,
				votedOn: selectedChoice === choice.id ? choice.votedOn + 1 : choice.votedOn,
			}
		});

		var updatedPoll = {
			question: body.question,
			choices: choices,
			'_rev': body._rev
		}

		db.insert(updatedPoll, body._id, function(err2, body2) {
			h.handleError(err);
			
			callback();
		})
	})
}

module.exports = db;