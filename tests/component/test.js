const canister = require('./../../index');
const path = require('path');
const fixtures = require('./fixture');

describe('Canister.js', function() {
	it('can build container from yml config file', function() {

		const moduleLoader = new canister.ModuleLoader(__dirname);
		const builder = new canister.Builder(moduleLoader);
		const yamlLoader = new canister.definitionLoader.YAML();

		yamlLoader.fromFile(path.join(__dirname, './wiring.yml'));

		const parser = new canister.Parser(yamlLoader.toJS());

		for (let definition of parser.parse()) {
			builder.addDefinition(definition);
		}

		const container = builder.build();

		expect(container.get('my.parameter')).to.equal('parameterValue');
		expect(container.get('my.module')).to.equal(fixtures);
		expect(container.get('my.property')).to.equal(fixtures.A);

		const singleton = container.get('my.singleton');

		expect(singleton).to.be.an.instanceOf(fixtures.SomeClass);
		expect(singleton).to.be.equal(container.get('my.singleton'));
		expect(singleton.args).to.be.eql([
			'string value', 123, 'prop.A.value', 'parameterValue'
		]);

		const instance = container.get('my.instance');
		expect(instance).to.not.be.equal(container.get('my.instance'));

		expect(container.get('my.property.class')).to.equal(fixtures.SomeClass);
	})
})