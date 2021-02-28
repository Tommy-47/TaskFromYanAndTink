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

    let result = 0;
    const sortByLength = (a, b) => {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        if (a.length == b.length) {
            if (a > b) return 1;
            else return -1;
        }
    };

    let countIter = +arrayInp[0].trim().split(" ")[0];
    let arrayNums = arrayInp[1].trim().split(" ");
    if (countIter === 1) {
        let numAsStr = arrayInp[1].trim();
        for (let i = 0, count = 0; i < numAsStr.length || count < 10; i++) {
            if (numAsStr[i] != '9') {
                let curr = +numAsStr;
                numAsStr = numAsStr.replace(numAsStr[i], '9');
                result += +numAsStr - curr;
                count++;
            }
        }
        return result;
    }
    arrayNums = arrayNums.sort(sortByLength);

    for (let i = 0, count = 0; count < countIter; i++) {
        if (arrayNums[i][0] != '9') {
            let curr = Number(arrayNums[i]);
            arrayNums[i] = arrayNums[i].replace(/\d/, '9');
            count++;
            result += arrayNums[i] - curr;
        }
    }
    return result;
}