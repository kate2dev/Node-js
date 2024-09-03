"use strict"
// Geting the fs file from the file system
import fs from 'fs';

// creating the file with content in it
fs.writeFile('welcome.txt', "Hello Node", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// Rendering the content in the file out
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});