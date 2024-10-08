# Build zip file with NPM

To ignore files create `.npmignore` file and add the files to ignore.

### Common ignore files:

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

### Run the script

```bash
npm run folder-4-zip
```

### Note

Note: Thefolder will be created 2 levels up in the delivery folder.

### Dependencies:

```
  "dependencies": {
    "ignore": "^6.0.2"
}
```
