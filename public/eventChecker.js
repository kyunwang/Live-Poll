exports.addClickEvent = function addClickEvent(el, callback) {
	if (document.addEventListener) {
		el.addEventListener('click', callback);
	} else {
		el.attachEvent('onclick', callback);
	}
}

