const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const games = input.slice(1).map(v => v.split(' ').map(Number));

// 0: 가위, 1: 바위, 2: 보
const perms = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];

let answer = 0;

for (const p of perms) {
  let winCount = 0;

  for (const [a, b] of games) {
    const A = p[a - 1];  // 첫 번째 개발자
    const B = p[b - 1];  // 두 번째 개발자

    if ((B + 1) % 3 === A) {
      winCount++;
    }
  }

  answer = Math.max(answer, winCount);
}

console.log(answer);
