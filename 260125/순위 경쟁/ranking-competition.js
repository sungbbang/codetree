const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const changes = input.slice(1).map(e => e.split(" "));

function getComb(a, b, c) {
    // 모두 점수가 같을 때
    if (a === b && b === c && c === a) {
        return 'abc';
    }

    const maxScore = Math.max(a, b, c);
    // a가 제일 높을 때
    if (maxScore === a) {
        if (maxScore === b) {
            return 'ab';
        } else if (maxScore === c) {
            return 'ac';
        }
        return 'a';
    }

    // b가 제일 높을 때
    if (maxScore === b) {
        // a랑 같은 경우는 a가 제일 높을 때 처리했으니 생략
        if (maxScore === c) {
            return 'bc';
        } 
        return 'b';
    }

    if (maxScore === c) {
        // a랑 같은 경우, b랑 같은 경우는 위에서 처리했으니 생략
        return 'c'
    }
}

let scoreA = 0;
let scoreB = 0;
let scoreC = 0;
let prev = 'abc';
let curr = prev;
let ans = 0;
for (let [person, score] of changes) {
    score = Number(score);

    if (person === 'A') scoreA += score;
    if (person === 'B') scoreB += score;
    if (person === 'C') scoreC += score;

    curr = getComb(scoreA, scoreB, scoreC);

    if (prev !== curr) {
        ans++;
        prev = curr;
    }
}

console.log(ans);