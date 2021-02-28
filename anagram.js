'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let firstWord = lines[0];
    let secondWord = lines[1];
    if (firstWord.length !== secondWord.length) {
        console.log(0);
        process.exit(0);
    }
    const letters = {};
    for (let letter of firstWord) {
        letters[letter] = letters[letter] ? ++letters[letter] : 1;
    }
    for (let letter of secondWord) {
        if (letters[letter]) {
            --letters[letter];
        } else {
            console.log(0);
            process.exit(0);
        }
    }
    console.log(1);
    process.exit(0);
});