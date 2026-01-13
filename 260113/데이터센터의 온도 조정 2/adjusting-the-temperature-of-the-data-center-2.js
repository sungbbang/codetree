const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const [n, c, g, h] = input[0].split(' ').map(Number);
const ts = input.slice(1, n+1).map(v => v.split(' ').map(Number));

let ans = 0;
for (let i = 0 ; i <= 1000; i++) {
    let sum = 0;
    for (let [ta, tb] of ts) {
        if (i < ta) sum += c;
        else if (i <= tb) sum += g;
        else sum += h;
    }
    ans = Math.max(ans, sum);
}

console.log(ans);