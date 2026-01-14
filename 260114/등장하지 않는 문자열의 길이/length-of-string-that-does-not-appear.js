const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

// 부분문자열 뽑기
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        console.log(string.slice(i, j+1));

        for (let k = j+1; k < n; k++) {
            console.log(string[k]);
            console.log(string.slice(k, k+j));
        }
        console.log()
    }
}