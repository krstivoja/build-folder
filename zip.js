const AdmZip = require('adm-zip');
const path = require('path');
const fs = require('fs');
const ignore = require('ignore'); // npm package to handle ignore rules

// Creating archives
const zip = new AdmZip();

const folderPath = path.join(__dirname, './'); // Path to the folder to be zipped
const folderName = path.basename(__dirname); // Get the current folder name
const outputPath = path.join(__dirname, `${folderName}.zip`); // Use folder name for the zip file

// Add files and folders recursively
const ig = ignore().add(fs.readFileSync('.npmignore').toString());

function addFilesFromDirectory(directory) {
    const files = fs.readdirSync(directory, { withFileTypes: true });
    files.forEach(file => {
        const fullPath = path.join(directory, file.name);
        const relativePath = path.relative(folderPath, fullPath); // Get relative path
        if (ig.ignores(relativePath)) return; // Skip ignored files using relative path

        if (file.isDirectory()) {
            addFilesFromDirectory(fullPath); // Recurse into directories
        } else {
            const zipPath = path.relative(folderPath, fullPath);
            zip.addLocalFile(fullPath, path.dirname(zipPath));
        }
    });
}

addFilesFromDirectory(folderPath);

// Write zip file to disk
zip.writeZip(outputPath, function (err) {
    if (err) {
        console.error('Failed to create zip:', err);
        process.exit(1);
    } else {
        console.log('Zip file created successfully at', outputPath);
    }
});