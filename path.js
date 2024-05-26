// path.js
const path = require('path'); // Import the path module

// Join multiple path segments
const joinedPath = path.join(__dirname, 'dir', 'file.txt');
console.log('Joined path:', joinedPath);

// Resolve an absolute path
const resolvedPath = path.resolve('dir', 'file.txt');
console.log('Resolved path:', resolvedPath);

// Get the directory name of a file path
const dirName = path.dirname(joinedPath);
console.log('Directory name:', dirName);

// Get the base name of a file path
const baseName = path.basename(joinedPath);
console.log('Base name:', baseName);

// Get the file extension of a file path
const extName = path.extname(joinedPath);
console.log('Extension name:', extName);
