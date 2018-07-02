let cod = [[74, 97, 109, 101, 115],[77, 101, 108, 105, 120], [73, 115, 97, 105, 97, 104], [77, 99, 67, 97, 119]];
let decode = function(val) {
	let decode = new Uint8Array(val);
	let decoder = new TextDecoder();
	let decoded = decoder.decode(decode);
	return decoded;
}
let pdata = {
	/*
	'user name, no spaces': {
		firstName: 'John', // First Name
		lastName: 'Doe', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Johnny', // The Name People Will See
		age: 0, // Your Age
		ageVisible: true, // Can People See Your Age? true (yes) | false (no)
		bio: 'This is a bio', // Write About Yourself
		pictureUrl: 'https://somepics.com/apic.png or ask to upload one', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper / Producer', // What Are You Considered In The Group?
	},
	*/
	'darkheartproductions': {
		firstName: decode(cod[0]), // First Name
		lastName: decode(cod[1]), // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'DarkHeart Productions', // The Name People Will See
		age: 16, // Your Age
		ageVisible: true, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Producer', // What Are You Considered In The Group?
	},
	'marvindakid': {
		firstName: decode(cod[2]), // First Name
		lastName: decode(cod[3]), // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'MarvinDaKid', // The Name People Will See
		age: 15, // Your Age
		ageVisible: true, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},
	'blxck17':{
		firstName: 'Raquan', // First Name
		lastName: '?', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Blxck17', // The Name People Will See
		age: 0, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},
	'subzero': {
		firstName: 'Keanu', // First Name
		lastName: '', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Subzero', // The Name People Will See
		age: 0, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},
	'Jalen': {
		firstName: 'Jalen', // First Name
		lastName: '?', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Jalen', // The Name People Will See
		age: 0, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'None', // What Are You Considered In The Group?
	},
	'hearteyeslover': {
		firstName: '', // First Name
		lastName: '', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Hearteyeslover', // The Name People Will See
		age: 0, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},

};