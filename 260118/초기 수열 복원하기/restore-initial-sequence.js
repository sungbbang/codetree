const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const sums = input[1].split(' ').map(Number);

function isValid(arr) {
    for (let i = 0; i < sums.length; i++) {
        if (arr[i] + arr[i+1] !== sums[i]) {
            return false;
        }
    }

    return true;
}

for (let i = 1; i <= n; i++) {
    const arr = [i];
    
    for (let j = 0; j < sums.length; j++) {
        arr.push(sums[j] - arr[j]);
    }

    console.log(arr)
   
    // if (isValid(arr)) {
    //     console.log(arr.join(' '));
    //     break;
    // }
}