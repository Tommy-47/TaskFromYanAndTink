'use strict';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var input;


rl.on('line', data => {
    input = data.trim();

}).on('close', () => {
    console.log(getCountRepdigit(input));
    process.exit(0);
});

function getCountRepdigit(inp) {
    let a = inp.split(" ")[0],
        b = inp.split(" ")[1];
    let arr = [];
    var result = 0;
    for (let curr = +a; curr <= +b; curr++) {
        if (curr < 10) {
            result++;
            arr.push(curr);
        } else {
            let str = String(curr);
            for (let i = 0; i < str.length - 1; i++) {
                if (str[i] != str[i + 1]) {
                    break;
                }
                let re = new RegExp(str[i], 'g');
                if (str.match(re).length == str.length) {
                    arr.push(curr);
                    result++;
                    curr = +str + Math.pow(10, str.length - 1);
                    break;
                }
            }
        }
    }
    return result;
}