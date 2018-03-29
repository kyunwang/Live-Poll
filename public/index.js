(function () {
	function addClickEvent(el, callback) {
		if (document.addEventListener) {
			el.addEventListener('click', callback);
		} else {
			el.attachEvent('onclick', callback);
		}
	}

// 	function unwrap(wrapper) {
// 		// place childNodes in document fragment
// 		var docFrag = document.createDocumentFragment();
// 		while (wrapper.firstChild) {
// 			 var child = wrapper.removeChild(wrapper.firstChild);
// 			 docFrag.appendChild(child);
// 		}

// 		console.log(docFrag);
		
// 		// replace wrapper with document fragment
// 		wrapper.parentNode.replaceChild(docFrag, wrapper);
//   }

// 	function extendContent() {
// 		var metas = document.getElementsByTagName('meta');
// 		// var nosc = document.getElementsByTagName('noscript');
// 		// nosc[0].parentElement.removeChild(nosc[0]);
// 		// delete nosc;
		
// 		for (var i = 0; i < metas.length; i++) {
// 			if (metas[i].getAttribute('http-equiv') === 'refresh') {
// 				console.log(true);
// 				// Because removing the tag does not work. we extend it for now.
// 				metas[i].content = "99";
// 			}
// 		}
// 	}

	// Super quick way to get the id
	var pollId = window.location.pathname.replace('/poll/', '');

	// Check on existence/support of/for Websockets
	if ('WebSocket' in window) {
		if(window.stop) {
			window.stop();
		} else {
			document.execCommand('Stop');
		}

		// Connect websocket
		// var ws = new WebSocket('ws://localhost:40510/poll');
		var ws = new WebSocket('ws://814c8628.ngrok.io/poll');



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
							addClickEvent(self.choices[j], function() {
								// console.log(pollId);
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
			update: function(data) {
				var voteAmount = document.getElementById('votes-' + data.choice);
				
				voteAmount.textContent = Number(voteAmount.textContent) + 1;
			}
		}

		poll.init();

	}
})()