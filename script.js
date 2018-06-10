let app = {
	errorLog: [],
	console: {
		log: console.log,
		error: console.error,
		info: console.info,
	},
	updateLogs: function() {
		//console.clear();
		for (let i = 0; i < this.errorLog.length; i++) {
			let type = this.errorLog[i].type;
			let val = this.errorLog[i].val;
			app.console[type](val);
		}
	},
	getPersonData: function(person) {
		
	},
	log: function(val) {
		this.errorLog[this.errorLog.length] = {type: 'log', val: val};
		this.updateLogs();
	},
	error: function(val) {
		this.errorLog[this.errorLog.length] = {type: 'error', val: val};
		this.updateLogs();
	},
	info: function(val) {
		this.errorLog[this.errorLog.length] = {type: 'info', val: val};
		this.updateLogs();
	},
	'loadScript': function(val, backup) {
		let source = val;
		let loadScript = document.createElement('script');
		loadScript.attributes.error = false;
		loadScript.src = source;
		loadScript.onerror = function() {
			this.attributes.error = true;
			if (backup) {
					 if (loadScript.attributes.error == true) {
						app.error(`Failed to load ${loadScript.src}`);
						let sourceBackup = backup;
						let loadScriptBackup = document.createElement('script');
						loadScriptBackup.src = sourceBackup;
						loadScriptBackup.onerror = function() {
							app.error(`Failed to load ${loadScriptBackup.src}\nConsider checking if the file exists.`);
						}
						document.body.appendChild(loadScriptBackup);
						return loadScriptBackup;
					}
			}
		}
		document.body.appendChild(loadScript);
		setTimeout( function() {
			if (loadScript.attributes.error == false) {
				app.info(`${loadScript.src} successfully loaded.`);
			}
		}, 100);
		if (loadScript.attributes.error == false) {
			return loadScript;
		}
	}
}

let start = () => {
	let explore = document.getElementsByClassName('explore')[0];
	explore.attributes.isopen = false;
	explore.onclick = function() {
		if (this.attributes.isopen == false) {
		 this.attributes.isopen = true;
		 document.getElementsByClassName('links')[0].style.top = '15%';
		 //document.getElementsByClassName('links')[0].style.opacity = '1';
		 document.getElementsByClassName('links')[0].style.zIndex = '-1';
		 setTimeout( function() {
			document.getElementsByClassName('links')[0].style.zIndex = '1';
		}, 1000);
		} else {
		 this.attributes.isopen = false;
		 document.getElementsByClassName('links')[0].style.top = '-100%';
		 //document.getElementsByClassName('links')[0].style.opacity = '0';
		 document.getElementsByClassName('links')[0].style.zIndex = '-1';
		}
	}
	
	
	let search = document.getElementById('search');
	search.onkeydown = function() {
	}
	
	// Link setup append
	
	let nScript = app.loadScript('linkSetup.js');
	nScript.onload = function() {
	let moshPitLogin = document.getElementById('login');
	moshPitLogin.onclick = function() {
		let pass = prompt('Mosh Pit Password');
		if (pass == password) {
			secure.save('fawiub29cn', 'passkey', pass);
			location = location;
		} else {
			alert('Password is Wrong');
		}
	}
	let password = 'wdfna24j';
		if (secure.load('passkey')) {
			if (secure.load('passkey') == password) {
				app.log('Logged in');
				document.getElementById('login').onclick = function() {
					secure.clear('passkey');
					location = location;
				};
				document.getElementById('login').innerHTML = 'Log Out of The Moshpit';
			} else {
				document.getElementById('moshpitPrivate').innerHTML = '';
				if (document.body.attributes.accessrequired) {
					location = location + 'a';
				}
			}
		} else {
		 document.getElementById('moshpitPrivate').innerHTML = '';
			if (document.body.attributes.accessrequired) {
				location = location + 'a';
			}
		}
	}
	let nodv = app.loadScript('noDevtools.js');
	nodv.onload = function() {
		loadPrevDevTools();
	}
}
window.addEventListener('load', start);
