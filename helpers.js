// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = function(obj) { return JSON.stringify(obj, null, 2) };

exports.handleError = function(err) {
	if(err) {
		return res.send('Oops an error occurred', err.message, err['status-code']);
	}
}