'use strict';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arrayInput = [];


rl.on('line', data => {
    arrayInput.push(data);

}).on('close', () => {
    console.log(getDiff(arrayInput));
    process.exit(0);
});

function getDiff(arrayInp) {
    let limit = +arrayInp[0].trim();
    let arrayNums = arrayInp[1].trim().split(" ").map(Number);
    let arr = [1];
    arrayNums = Array.from(new Set(arrayNums));
    let finish = Math.pow(arrayNums.length, 4);
    while (finish > arr.length) {
        let sum = 1;
        let count = 0;
        while (count < arrayNums.length) {
            let rand = arrayNums[Math.floor(Math.random() * arrayNums.length)];
            let randLen = Math.floor(Math.random() * arrayNums.length);
            sum += rand * randLen;
            count++;
        }
        if (sum <= limit) {
            arr.push(sum);
            sum = 1;
        }
    }
    return new Set(arr).size;
}