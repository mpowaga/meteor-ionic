Template.ionFooter.helpers({
	type: function() {
		if (this.type) {
			return this.type;
		}
		return this.toString();
	}
});