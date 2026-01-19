const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, l] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let ans = 0;

for (let h = 1; h <= 101; h++) {
    let count = 0;      // 이미 h 이상인 수
    let candidates = 0; // h-1인 수 (올릴 수 있는 후보)
    
    for (let num of arr) {
        if (num >= h) count++;
        else if (num === h - 1) candidates++;
    }
    
    // 올릴 수 있는 개수는 L개까지만
    let canAdd = Math.min(candidates, l);
    
    if (count + canAdd >= h) {
        ans = h;  // h가 커지는 순서라 max 불필요
    }
}

console.log(ans);