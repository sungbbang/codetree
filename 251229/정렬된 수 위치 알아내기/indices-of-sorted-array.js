class Num {
    constructor(num, idx) {
        this.num = num;
        this.idx = idx;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map((v, i) => new Num(Number(v), i));

arr.sort((a, b) => {
    if (a.num !== b.num) return a.num - b.num;
    return a.idx - b.idx
});

const ans = Array(n).fill(0);
for (let i = 0; i < n; i++) {
    ans[arr[i].idx] = i+1;
}

ans.forEach(v => process.stdout.write(v + ' '));