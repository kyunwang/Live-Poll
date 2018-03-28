// Sources: https://github.com/websockets/ws
// https://hackernoon.com/nodejs-web-socket-example-tutorial-send-message-connect-express-set-up-easy-step-30347a2c5535

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 40510, path: '/poll' });

wss.on('connection', function (ws) {
	ws.isAlive = true;

  	ws.on('pong', heartbeat);

	ws.on('message', function (message) {
		console.log('received: %s', message)
	});

	ws.send('sup');
});

wss.on('close', function (ws) {
	console.log('CLISSE');
	// ws.terminate();
});


function noop() {
	console.log('alive');
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