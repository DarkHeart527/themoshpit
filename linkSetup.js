(function() {
	
let links = {
	'People': {
		'DarkHeart Productions': 'darkheartproductions.html',
		'Marvin Da Kid': 'marvindakid.html',
		'RJ': '',
		'Keanu': '',
		'Raquan (I think it\'s spelled that way)': '',
	},
	'Tracks': {
	},
	'Mosh Pit Private Data': {
		'Beats': 'beats.html',
		'Loops': 'loops.html',
		'Tracks': 'tracks.html',
		'private': true,
	},
}

for (let i = 0; i < Object.keys(links).length; i++) {
	let append = document.getElementsByClassName('links')[0];
	
	let curObject = Object.keys(links)[i];
	let curObjectName = curObject;
	
	// Create the Container
	
	let div = document.createElement('div');
	append.appendChild(div);
	
	// Create the Title
	
	let objectTitle = document.createElement('p');
	objectTitle.innerHTML = curObjectName;
	div.appendChild(objectTitle);
	
	// Hold the links
	
	let divLinks = document.createElement('div');
	div.appendChild(divLinks);
	
	curObject = links[curObject];
	
	for (let j = 0; j < Object.keys(curObject).length; j++) {
		let curLink = Object.keys(curObject)[j];
		let curLinkName = curLink;
		if (curLinkName != 'private') {
			curLink = curObject[curLink];
			
			
			let anchor = document.createElement('a');
			anchor.innerHTML = curLinkName;
			anchor.href = curLink;
			divLinks.appendChild(anchor);
		} else {
			div.id = 'moshpitPrivate';
		}
	}
}

}());