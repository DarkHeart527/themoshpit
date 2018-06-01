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
	
	let source = 'linkSetup.js';
	let nScript = document.createElement('script');
	nScript.src = source;
	document.body.appendChild(nScript);
	nScript.onload = function() {
	let moshPitLogin = document.getElementById('login');
	moshPitLogin.onclick = function() {
		let pass = prompt('Mosh Pit Password');
		if (pass == password) {
			secure.save('hi', 'passkey', pass);
			location = location;
		} else {
			alert('Password is Wrong');
		}
	}
	let password = 'wdfna24j';
		if (secure.load('passkey')) {
			if (secure.load('passkey') == password) {
				console.log('Logged in');
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
	loadPrevDevTools();
}
window.addEventListener('load', start);