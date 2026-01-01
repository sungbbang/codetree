const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let cnt = 0;
let ans = 0;
if (arr[0] > t) {
    cnt = 1;
    ans = 1;
}

for (let i = 1; i < n; i++) {
    if (arr[i] > t) {
        if (arr[i-1] < arr[i]) cnt++;
        else cnt = 1;
    } else {
        cnt = 0;
    }
    ans = cnt > ans ? cnt : ans;
}

console.log(ans);