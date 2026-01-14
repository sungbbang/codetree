const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));
const n = 3;


function canWin(arr) {
    const nums = Array(10).fill(0);

    for (let el of arr) {
        nums[el]++;
    }

    for (let num of nums) {
        if (num === 2) {
            return true;
        }
    }

    return false;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    const a = []; // 가로
    const b = []; // 세로
    const c = []; // 대각 \
    const d = []; // 대각 /
    for (let j = 0; j < n; j++) {
        a.push(board[i][j]);
        b.push(board[j][i]);
        if (i === 0) {
            c.push(board[i+j][j]);
            d.push(board[j][n-j-1]);
        }
    }
    if (canWin(a)) ans++;
    if (canWin(b)) ans++;
    if (canWin(c)) ans++;
    if (canWin(d)) ans++;
}

console.log(ans);