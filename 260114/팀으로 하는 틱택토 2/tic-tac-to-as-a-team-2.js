const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));
const n = 3;


function canWin(arr) {
    if (arr.length === 0) {
        return false;
    }

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

let ans = [];
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

    if (canWin(a)) ans.push(a.join(''));
    if (canWin(b)) ans.push(b.join(''));
    if (canWin(c)) ans.push(c.join(''));
    if (canWin(d)) ans.push(d.join(''));
}

const nums = Array(1000).fill(0);

for (let a of ans) {
    nums[Number(a)]++;
}

let result = 0;
for (let num of nums) {
    if (num >= 1) {
        result++;
    }
}

console.log(result);