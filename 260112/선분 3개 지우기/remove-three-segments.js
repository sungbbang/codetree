const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const lines = input.slice(1).map(v => v.split(' ').map(Number));

const MAX = 100;
const arr = Array(MAX+1).fill(0);

for (let [a, b] of lines) {
    for (let i = a; i <= b; i++) {
        arr[i]++;
    }
}

let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        for (let k = j+1; k < n; k++) {
            if (i == j || j == k || k == i) continue;

            let flag = true;
            for (let [a, b] of [lines[i], lines[j], lines[k]]) {
                for (let m = a; m <= b; m++) {
                    arr[m]--;
                }
            }

            for (let num of arr) {
                if (num > 1) {
                    flag = false;
                    break;
                }
            }

            for (let [a, b] of [lines[i], lines[j], lines[k]]) {
                for (let m = a; m <= b; m++) {
                    arr[m]++;
                }
            }

            if (flag) cnt++;
        }
    }
}

console.log(cnt);