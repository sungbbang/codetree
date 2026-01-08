const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a1, b1, c1] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

function inRange(num, target) {
    return Math.abs(num - target) <= 2 || n - Math.abs(num - target) <= 2;
}

const first = [];
for (let num of [a1, b1, c1]) {
    const temp = [];
    for (let i = 1; i <= n; i++) {
        if (inRange(num, i)) {
            temp.push(i);
        }
    }
    first.push(temp);
}

const second = [];
for (let num of [a2, b2, c2]) {
    const temp = [];
    for (let i = 1; i <= n; i++) {
        if (inRange(num, i)) {
            temp.push(i);
        }
    }
    second.push(temp);
}

let a_cnt = 0;
let b_cnt = 0;
let c_cnt = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (first[0][i] === second[0][j]) {
            a_cnt++;
        }
        if (first[1][i] === second[1][j]) {
            b_cnt++;
        }
        if (first[2][i] === second[2][j]) {
            c_cnt++;
        }
    }
}

console.log((5 ** 3) * 2 - (a_cnt * b_cnt * c_cnt))