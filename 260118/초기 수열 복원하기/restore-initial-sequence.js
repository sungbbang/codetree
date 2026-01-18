const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const sums = input[1].split(' ').map(Number);

function isValid(arr) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            return false;
        }

        if (nums.includes(arr[i])) {
            return false;
        }
        nums.push(arr[i]);
    }

    return true;
}

for (let i = 1; i <= n; i++) {
    const arr = [i];
    
    for (let j = 0; j < sums.length; j++) {
        arr.push(sums[j] - arr[j]);
    }

    if (isValid(arr)) {
        console.log(arr.join(' '));
        break;
    }
}