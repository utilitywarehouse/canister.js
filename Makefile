install:
	yarn install

coverage:
	rm -rf coverage
	./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- -r tests/.bootstrap.js 'tests/spec/**/*.spec.js' 'tests/**/test.js'

test: test-spec test-component

test-spec:
	./node_modules/.bin/mocha -r tests/.bootstrap.js 'tests/spec/**/*.spec.js'

test-component:
	./node_modules/.bin/mocha -r tests/.bootstrap.js 'tests/component/test.js'
