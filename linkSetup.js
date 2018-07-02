(function() {
	
window.links = {
	'Pages': {
		'Home': 'index.html',
		'People': '#',
	},
	'People': {
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
		nameDisplay = firstName + ' ' + lastName + ' (' + nickName + ')';
	} else {
		nameDisplay = nickName;
	}
	// Handles Profiles
	
	let curLink = location.href;
	curLink = curLink.split('#');
	curLink = curLink[1];
	
	if (link == curLink) {
		if (uData.pictureUrl != 'none' && uData.pictureUrl != '') {
			document.getElementById('profilePicture').src = uData.pictureUrl;	
		}
		if (uData.ageVisible == true) {
			document.getElementById('age').innerHTML = 'Age: ' + uData.age;
		}
		if (uData.bio != 'No Bio' && uData.bio != 'none' && uData.bio != '' && uData.bio.toLowerCase() != 'None') {
			document.getElementById('bio').innerHTML = uData.bio;
		} else {
			document.getElementById('bio').innerHTML = '<i>(No Bio)</i>';
		}
		document.getElementById('position').innerHTML = uData.position;
		document.getElementById('name').innerHTML = nameDisplay;
		document.getElementsByTagName('title')[0] = `${nameDisplay} - The Moshpit`;
	}
	links.People[nameDisplay] = `hashtagredirect.html#person.html#${link}`;
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
