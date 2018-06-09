/* eslint-disable spaced-comment */
/*!
	devtools-detect
	Detect if DevTools is open
	https://github.com/sindresorhus/devtools-detect
	by Sindre Sorhus
	MIT License
*/
function loadPrevDevTools() {
	'use strict';
	var devtools = {
		open: false,
		orientation: null
	};
	var threshold = 160;
	var emitEvent = function (state, orientation) {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				open: state,
				orientation: orientation
			}
		}));
	};

	setInterval(function () {
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		var orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
			if (!devtools.open || devtools.orientation !== orientation) {
				emitEvent(true, orientation);
			}

			devtools.open = true;
			devtools.orientation = orientation;
		} else {
			if (devtools.open) {
				emitEvent(false, null);
			}

			devtools.open = false;
			devtools.orientation = null;
		}
	}, 50);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
	window.addEventListener('devtoolschange', function (e) {
		if (e.detail.open == true) {
		 alert('Please don\'t use Inspect Element here.\nYou have been sent to "about:blank".');
		 //location = 'about:blank';
		} else {
		 location = location;
		}
	});
	};
	