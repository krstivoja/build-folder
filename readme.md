# Build zip file with NPM

To ignore files create `.npmignore` file and add the files to ignore.

```bash
npm run folder-4-zip
```

Note: Thefolder will be created 2 levels up in the delivery folder.

Dependencies:

```
  "dependencies": {
    "adm-zip": "^0.5.16",
    "ignore": "^6.0.2"
}
```

Common ignore files:

```
node_modules/
src/
package-lock.json
.gitignore
.npmignore
.git
zip.js
readme.md
```
