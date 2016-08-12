test: npm-dep build
	@npm test || { exit 1; }

build: npm-dep
	@npm build || { exit 1; }

lint: npm-dep
	@npm run lint || { exit 1; }

release: npm-dep lint bump
	@git push origin master || { exit 1; }
	@git push origin v$(shell node version.js) || { exit 1; }
	@make publish

publish: npm-dep
	@npm publish || { exit 1; }

install: npm-dep
	@npm install || { exit 1; }

clean:
	@rm -fr *.log

bump:
	@npm version $(KIND) || { exit 1; }

npm-dep:
	@test `which npm` || { echo 'You need npm to do npm install... makes sense?'; exit 1; }

.PHONY: test
