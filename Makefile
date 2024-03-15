install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

line:
	npx eslint .

brain-even:
	node bin/brain-even.js
