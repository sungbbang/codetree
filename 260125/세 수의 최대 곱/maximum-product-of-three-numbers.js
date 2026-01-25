const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const positive = [];
const negative = [];
let zero = false;

for (let num of arr) {
    if (num > 0) positive.push(num);
    else if (num < 0) negative.push(num);
    else if (num === 0) zero = true;
}

positive.sort((a, b) => b - a);
negative.sort((a, b) => a - b);

// 양수가 3개 이상일 때
let p3 = 0;
if (positive.length >= 3) {
    p3 = positive[0] * positive[1] * positive[2];
}

// 양수 1개, 음수 2개일 때
let p1n2 = 0;
if (positive.length >= 1 && negative.length >= 2) {
    p1n2 = positive[0] * negative[0] * negative[1];
}

// 양수 2개, 음수 1개일 때
let p2n1 = 0;
if (positive.length >= 2 && negative.length >= 1) {
    let lastN = negative.length - 1;
    p2n1 = positive[0] * positive[1] * negative[lastN];
}

// 음수 3개일 때
let n3 = 0;
if (negative.length >= 3) {
    n3 = negative[0] * negative[1] * negative[2];
}

let ans = Math.max(p3, p1n2, p2n1, n3);
if (zero) {
    ans = Math.max(ans, 0);
}

console.log(ans);