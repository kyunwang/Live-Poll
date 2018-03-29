// Sources: https://github.com/websockets/ws
// https://hackernoon.com/nodejs-web-socket-example-tutorial-send-message-connect-express-set-up-easy-step-30347a2c5535

var db = require('./db');

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 40510, path: '/poll' });

wss.on('connection', function (ws) {
	ws.isAlive = true;

	ws.on('pong', heartbeat);

	ws.on('message', function (message) {
		
		// Broadcast to everyone else.
		wss.clients.forEach(function each(client) {
			try {
				// Parse to update the database
				var data = JSON.parse(message);
				
				// Callback needed for here or just check for callback in update?
				db.update(data.id, data.choice, function() {
					// Send message back to reflect to update the voted clientside
					client.send(message);
				});
			} catch (err) {
				client.send(message);
			}
		});


	});
});

wss.on('close', function (ws) {
	console.log('CLOSING CONNECTION');
	ws.terminate();
});


function noop() {
	// console.log('alive');
}

function heartbeat() {
	this.isAlive = true;
}

const interval = setInterval(function ping() {
	wss.clients.forEach(function each(ws) {
		if (ws.isAlive === false) return ws.terminate();

		ws.isAlive = false;
		ws.ping(noop);
	});
}, 3000);