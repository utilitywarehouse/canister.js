install:
	yarn install

.PHONY: coverage
coverage:
	rm -rf coverage
	./node_modules/.bin/nyc yarn test

test: test-spec test-component

test-spec:
	./node_modules/.bin/mocha -r tests/.bootstrap.js 'tests/spec/**/*.spec.js'

test-component:
	./node_modules/.bin/mocha -r tests/.bootstrap.js 'tests/component/test.js'
