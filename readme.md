# Build zip file with NPM

To ignore files .create .npmignore file and add the files to ignore.

The `zip.js` file is responsible for creating a zip archive of the project. It typically performs the following tasks:

1. Reads the project directory
2. Excludes files and directories specified in `.npmignore`
3. Compresses the remaining files and folders into a zip archive
4. Saves the zip file with a specified name and location

This file is crucial for packaging the project for distribution or deployment.

```bash
npm run build-zip
```
