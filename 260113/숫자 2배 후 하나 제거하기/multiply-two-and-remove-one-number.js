const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let ans = Infinity;
for (let i = 0; i < n; i++) {
    nums[i] *= 2;
    for (let j = 0; j < n; j++) {
        const remainings = [];
        for (let k = 0; k < n; k++) {
            if (j !== k) {
                remainings.push(nums[k]);
            }
        }
        
        let sum = 0;
        for (let i = 0; i < n-2; i++) {
            sum += Math.abs(remainings[i] - remainings[i+1]);
        }

        ans = Math.min(ans, sum);
    }
    nums[i] /= 2;

}

console.log(ans);