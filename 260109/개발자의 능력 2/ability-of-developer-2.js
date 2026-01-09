const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = 6;
const arr = input[0].split(' ').map(Number);

function diff(i, j, k, l) {
    const sum1 = arr[i] + arr[j];
    const sum2 = arr[k] + arr[l];
    const sum3 = arr.reduce((acc, curr) => acc + curr, 0) - sum1 - sum2;

    const max = Math.max(sum1, sum2, sum3);
    const min = Math.min(sum1, sum2, sum3);
    
    return max - min;
}


let ans = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = 0; k < n; k++) {
            for (let l = k + 1; l < n; l++) {
                if (k === i || k === j || l === i || l === j) {
                    continue;
                }
                ans = Math.min(ans, diff(i, j, k, l));
            }
        }
    }
}

console.log(ans);
