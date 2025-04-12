
release:
	mv ptr1e-modifications.js ptr1e-modifications-bak.js
	npx esbuild js/main.mjs --bundle --minify --outfile=ptr1e-modifications.js
	zip module.zip -r lang styles/main.css templates ptr1e-modifications.js module.json README.md LICENSE
	mv ptr1e-modifications-bak.js ptr1e-modifications.js
