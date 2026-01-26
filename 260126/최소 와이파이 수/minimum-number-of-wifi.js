const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

let ans = 0;
if (m === 0) {
    ans = arr.filter(num => num === 1).length;
} else {
    for (let i = m; i < n; i+=m*2+1) {
        ans++;
    }
}

console.log(ans);
