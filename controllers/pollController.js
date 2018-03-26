exports.homePage = function (req, res) {
	console.log('HomePage');
	res.render('index', {
		timeRefresh: true,
		pollList: req.session.pollList || []
	});
}

exports.newPollForm = function(req, res) {
	console.log('New poll form');
	res.render('pollForm');
}

exports.addNewPoll = function(req, res) {
	console.log('Add new poll', req.body);
	if (!req.session.pollList) {
		req.session.pollList = [];
	}
	req.session.pollList.push({name: req.body['poll-question'], entries: 44})
	
	res.redirect('/');
}