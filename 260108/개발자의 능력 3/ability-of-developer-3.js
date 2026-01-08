const fs = require('fs');
const nums = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function getDiff(sum1, sum2) {
    return Math.abs(sum1 - sum2);
}

let total = 0;
for (let num of nums) {
    total += num;
}

const ans = [];
for (let i = 0; i < 6; i++) {
    for (let j = i+1; j < 6; j++) {
        for (let k = j+1; k < 6; k++) {
            let sum = nums[i]+nums[j]+nums[k];
            ans.push(getDiff(sum, total-sum));
        }
    }
}

console.log(Math.min(...ans));