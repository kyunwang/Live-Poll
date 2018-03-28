(function () {
	function addClickEvent(el, callback) {
		if (document.addEventListener) {
			el.addEventListener('click', callback);
		} else {
			el.attachEvent('onclick', callback);
		}
	}


	if ('WebSocket' in window) {
		// Connect websocket
		var ws = new WebSocket('ws://localhost:40510/poll');

		// Call on the on('connection')
		ws.onopen = function () {
			console.log('websocket is connected ...')
			// Send to the on 'message' in the server
			ws.send('connected')
		}

		// Happens on all 'ws.send()' calls from the server
		ws.onmessage = function (e) {
			console.log('message', e);
		}

		// Calls when sockets are closed (dies not execute on chrome does on firefox)
		ws.onclose = function (e) {
			ws.send('Close WS connection');
		}


		var pollchoices = {
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
							addClickEvent(self.choices[j], function() {
								ws.send(self.choices[j].value, 'coockies');
							})
						}, 0);
					}
				};
				
			}
		}

		pollchoices.init();
		// pollchoices.addEvents();

	}
})()