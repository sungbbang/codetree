const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const numbers = input.slice(1).map(v => Number(v));

numbers.sort((a, b) => a - b);

let ans = 0;
for (let i = 0; i < n; i++) {
    const temp = [];
    temp.push(numbers[i]);
    for (let j = i+1; j < n; j++) {
        if (numbers[j] - numbers[0] <= k) {
            temp.push(numbers[j]);
        } else {
            break;
        }
    }
    ans = Math.max(ans, temp.length);
}

console.log(ans);