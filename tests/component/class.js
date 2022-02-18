const { v1: uuidv1 } = require('uuid');

module.exports = class {
	constructor (...args) {
		this.id = uuidv1();
		this.args = args;
	}
}
