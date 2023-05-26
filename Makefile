install:
	yarn install

lint:
	./node_modules/.bin/eslint --fix . && ./node_modules/.bin/prettier --write './*.js'

test: test-spec test-component

test-spec:
	./node_modules/.bin/mocha -r tests/.bootstrap.js 'tests/spec/**/*.spec.js'

test-component:
	./node_modules/.bin/mocha -r tests/.bootstrap.js 'tests/component/test.js'
