exports.homePage = function (req, res) {
	console.log('HomePage');
	res.render('index');
}

exports.newPollForm = function(req, res) {
	console.log('New poll form');
	res.render('pollForm');
}

exports.addNewPoll = function(req, res) {
	console.log('Add new poll');
	redirect('/');
}