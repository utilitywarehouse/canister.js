const { v1: uuidv1 } = require('uuid');

module.exports.SomeClass = class {
	constructor (...args) {
		this.id = uuidv1();
		this.args = args;
	}
}


module.exports.A = 'prop.A.value';

module.exports.TaggedClass = class {
	setA(a) {
		this.a = a;
	}
	setB(...b) {
		this.b = b;
	}
};

module.exports.factoryFunction = function(...args) {
	return {args, id: uuidv1()};
}

module.exports.nested = {
	nestedFactoryFunction(...args) {
		return {args};
	},
	SomeClass: module.exports.SomeClass
}

module.exports.D = {
	a: {
		b: 1
	}
}
