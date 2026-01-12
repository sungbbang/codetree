const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, b] = input[0].split(' ').map(Number);
const ps = input.slice(1).map(v => v.split(' ').map(Number));

ps.sort((a, b) => {
    const [pA, sA] = a;
    const [pB, sB] = b;

    if (pA < pB) return -1;
    if (pA > pB) return 1;
    if (pA === pB) {
        if (sA < sB) return -1;
        if (sA > sB) return 1;
    }
})

let ans = 0;
for (let i = 0; i < n; i++) {
    let total = ps[i][0] / 2 + ps[i][1];
    let cnt = 1;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        if (total >= b) {
            break;
        }

        total = total + ps[j][0] + ps[j][1];
        cnt++;
    }
    if (total > b) cnt--;
    ans = Math.max(ans, cnt);
}

console.log(ans);