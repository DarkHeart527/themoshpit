(function() {
	
window.links = {
	'People': {
		//'DarkHeart Productions': 'person.html#darkheartproductions',
		//'MarvinDaKid': 'person.html#marvindakid',
		//'Hearteyeslover': 'person.html#hearteyeslover',
		//'Keanu': 'person.html#keanu',
		//'Blxck 15': 'person.html#blxck15',
		//'Jalen': 'person.html#jalen',
		//'Anthony': 'person.html#anthony',
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
let data = pdata;
for (let i = 0; i < Object.keys(data).length; i++) {
	let nameDisplay;
	
	let uData = Object.keys(data)[i];
	let link = uData;
	uData = pdata[uData];
	let nickName = uData.nickName;
	let firstName = uData.firstName;
	let lastName = uData.lastName;
	let realNameVisible = uData.realNameVisible;
	console.log(realNameVisible)
	if (realNameVisible == true) {
		nameDisplay = firstName + ' ' + lastName;
	} else {
		nameDisplay = nickName;
	}
	
	links.People[nameDisplay] = `person.html#${link}`;
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
