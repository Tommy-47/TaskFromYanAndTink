'use strict';
const {
    SSL_OP_SSLEAY_080_CLIENT_DH_BUG
} = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let result = 0;
    let prevOneIndex = 0;
    const arrayOfOne = [];
    for (let i = 1; i < lines.length; i++) {
        if (lines[i] !== '1' && result > 0) {
            arrayOfOne.push(result);
            result = 0;
            prevOneIndex = 0;
        } else if (prevOneIndex === i - 1 && lines[i] === '1') {
            result++;
            prevOneIndex = i;
            if (i == lines.length - 1) {
                arrayOfOne.push(result);
            }
        } else if (lines[i] === '1' && prevOneIndex === 0) {
            result++;
            prevOneIndex = i;
        }
    }
    arrayOfOne.push(result);
    console.log(Math.max(...arrayOfOne));

    process.exit(0);
});