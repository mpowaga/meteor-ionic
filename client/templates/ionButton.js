Template.ionButton.helpers({
	classes: function() {
		var classes = [];
		var attrs = ['type', 'color', 'width'];
		for (var attr in attrs) {
			if (typeof this[attrs[attr]] === 'string')
				classes.push('button-' + this[attrs[attr]]);
		}

		if (typeof this.icon === 'string') {
			var icon = this.icon.split(' ');
			classes.push('ion-' + icon[0]);

			if (icon[1] == 'left' || icon[1] == 'right') {
				classes.push('icon-' + icon[1]);
			}
		}

		return classes.join(' ');
	}
});