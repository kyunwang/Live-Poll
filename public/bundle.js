(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
exports.addClickEvent = function addClickEvent(el, callback) {
	if (document.addEventListener) {
		el.addEventListener('click', callback);
	} else {
		el.attachEvent('onclick', callback);
	}
}


},{}],2:[function(require,module,exports){
var bwsC = require('./eventChecker');

function handleWebsockets() {
	if (window.stop) {
		window.stop();
	} else {
		document.execCommand('Stop');
	}

	// Connect websocket
	var ws = new WebSocket('ws://localhost:40510/poll');
	// var ws = new WebSocket('ws://814c8628.ngrok.io/poll');
	// var ws = new WebSocket('ws://745296a7.ngrok.io/poll');


	// Call on the on('connection')
	ws.onopen = function () {
		console.log('websocket is connected ...');
		// Send to the on 'message' in the server
		ws.send('connected');
	}

	// Happens on all 'ws.send()' calls from the server
	ws.onmessage = function (e) {
		try {
			var data = JSON.parse(e.data);
			poll.update(data);
		} catch (err) {
			console.log('Not a vote');
		}
	}

	// Calls when sockets are closed (dies not execute on chrome does on firefox)
	ws.onclose = function (e) {
		ws.send('Close WS connection');
	}


	var poll = {
		choices: document.getElementsByTagName('input'),
		init: function () {
			var filteredChoices = [];

			for (var i = 0; i < this.choices.length; i++) {
				if (this.choices[i].type === 'radio') {
					filteredChoices.push(this.choices[i]);
				}
			}
			// Removing non type radio inputs
			this.choices = filteredChoices;

			// Appying the click events to the radiobuttons
			this.addEvents();
		},
		addEvents: function () {
			var self = this;
			// Source: https://dzone.com/articles/why-does-javascript-loop-only-use-last-value
			for (var i = 0; i < this.choices.length; i++) {
				try { throw i }
				catch (j) {
					setTimeout(function () {
						bwsC.addClickEvent(self.choices[j], function (e) {
							if (e.clientX === 0) {
								return;
							}
							var data = {
								id: pollId,
								choice: self.choices[j].value
							}

							var stringified = JSON.stringify(data);

							// ws.send(data);
							ws.send(stringified);
						});
					}, 0);
				}
			};

		},
		update: function (data) {
			var voteAmount = document.getElementById('votes-' + data.choice);

			voteAmount.textContent = Number(voteAmount.textContent) + 1;
		}
	}

	poll.init();
}

module.exports = handleWebsockets;
},{"./eventChecker":1}],3:[function(require,module,exports){
var handleWebsockets = require('./handleWebsockets');

(function () {
	// Super quick way to get the id
	var pollId = window.location.pathname.replace('/poll/', '');

	// Check on existence/support of/for Websockets
	if ('WebSocket' in window) {
		handleWebsockets();
	}
})()
},{"./handleWebsockets":2}]},{},[3]);
