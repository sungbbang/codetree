const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const numbers = input[1].trim().split(' ').map(Number);

let ans = Infinity;
for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    let count = 0;
    for (let num of numbers) {
        // 최솟값보다 수가 작을 경우
        if (num < i) count += i - num;
        else {
            const diff = num - i;
            if (diff > k) count += diff - k;
        }
        
    }
    ans = Math.min(ans, count);
}

console.log(ans);