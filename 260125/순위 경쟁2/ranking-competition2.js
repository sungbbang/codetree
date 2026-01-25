const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const ranking = input.slice(1).map(v => v.split(' '));

let scoreA = 0;
let scoreB = 0;
let prev = 'AB';
let curr = prev;
let cnt = 0;
for (let [person, score] of ranking) {
    score = Number(score);
    if (person === 'A') {
        scoreA += score;
    } else {
        scoreB += score;
    }

    if (scoreA === scoreB) {
        curr = 'AB';
    } else if (scoreA > scoreB) {
        curr = 'A';
    } else {
        curr = 'B';
    }

    if (prev !== curr) {
        cnt++;
        prev = curr;
    }
}

console.log(cnt);