const path = require('path');
const resolve = require('resolve').sync;

module.exports = class Loader {
	constructor(root) {
		this.root = root;
	}

	path(module) {
		if (path.isAbsolute(module)) {
			return module;
		}

		return resolve(module, {basedir: this.root});
	}

	loadModule(module) {
		return require(this.path(module));
	}
};
