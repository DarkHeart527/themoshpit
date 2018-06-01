// Easy Secure Beta 1.0.0 by DarkHeart Productions license 
let secure = {
	disable: function() {
		secure = '';
	},
	code: 'fawiub29cn',
	save: function(code, name, data) {
		if (code == unescape(this.code)) {
			data = data;
			data = JSON.stringify(data);
			localStorage.setItem(name, data);
		}
	},
	load: function(name) {
		let data = localStorage.getItem(name);
		data = JSON.parse(data);
		return data;
	},
	clear: function(name) {
		localStorage.clear(name);
	},
}
