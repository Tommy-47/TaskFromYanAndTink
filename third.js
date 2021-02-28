'use strict';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arrayInput = [];


rl.on('line', data => {
    arrayInput.push(data.trim());

}).on('close', () => {
    console.log(getIndex(arrayInput));
    process.exit(0);
});

function getIndex(inp) {
    let arrayGrowth = inp[1].split(" ");
    let even = 0;
    let odd = 0;
    var result = [];
    for (let i = 1; i < arrayGrowth.length; i++) {
        if (arrayGrowth[i - 1] % 2 === 0 && i % 2 === 1) {
            even++;
            if (arrayGrowth[i] % 2 === 1) {
                odd++;
                result.push([i, i + 1]);
                let curr = arrayGrowth[i];
                arrayGrowth[i] = arrayGrowth[i - 1];
                arrayGrowth[i - 1] = curr;
            }
        } else if (arrayGrowth[i - 1] % 2 === 1 && i % 2 === 0) {
            odd++;
            if (arrayGrowth[i] % 2 === 0) {
                even++;
                result.push([i, i + 1]);
                let curr = arrayGrowth[i];
                arrayGrowth[i] = arrayGrowth[i - 1];
                arrayGrowth[i - 1] = curr;
            }
        } else {
            continue;
        }
    }
    return (result.length == 1 && odd === even) ? result[0] : '-1 -1';
}