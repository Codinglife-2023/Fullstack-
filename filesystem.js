// filesystem.js
const fs = require('fs'); // Import the fs module

// Write a message to a new file
fs.writeFile('message.txt', 'Hello, this is a message from Node.js!', (err) => {
    if (err) throw err; // Handle error
    console.log('File has been written');

    // Read the content of the file
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) throw err; // Handle error
        console.log('File content:', data);

        // Append some text to the file
        fs.appendFile('message.txt', '\nAppended text.', (err) => {
            if (err) throw err; // Handle error
            console.log('Text has been appended');

            // Read the updated content of the file
            fs.readFile('message.txt', 'utf8', (err, updatedData) => {
                if (err) throw err; // Handle error
                console.log('Updated file content:', updatedData);
            });
        });
    });
});
