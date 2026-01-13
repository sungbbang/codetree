const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x, y] = input[0].split(" ").map(Number);

let ans = 0;
for (let i = x; i <= y; i++) {
    if (isInteresting(i)) {
        ans++;
    }
}

console.log(ans);

function isInteresting(num) {
    const strNum = String(num);

    const nums = Array(10).fill(0);
    for (let c of strNum) {
        nums[Number(c)]++;
    }

    let cnt = 0;
    let isCount1 = 0;
    for (let i = 0; i <= 10; i++) {
        if (nums[i] === 1) isCount1++;
        if (nums[i] > 0) cnt++;
    }

    if (cnt === 2 && isCount1 === 1) {
        return true;
    }

    return false;
}