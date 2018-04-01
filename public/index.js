var handleWebsockets = require('./handleWebsockets');

(function () {
	// Super quick way to get the id
	var pollId = window.location.pathname.replace('/poll/', '');

	// Check on existence/support of/for Websockets
	if ('WebSocket' in window) {
		handleWebsockets();
	}
})()