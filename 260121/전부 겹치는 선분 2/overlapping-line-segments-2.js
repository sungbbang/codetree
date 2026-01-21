const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = input.slice(1).map(v => v.trim().split(' ').map(Number));
const arr = Array(101).fill(0);

for (let [x1, x2] of segments) {
    for (let i = x1; i <= x2; i++) {
        arr[i] += 1;
    }
}

function check(line) {
    const [x1, x2] = line;

    for (let i = x1; i <= x2; i++) {
        arr[i]--;
    }

    let result = false;
    for (let num of arr) {
        if (num >= n-1) {
            result = true;
            break;
        }
    }

    for (let i = x1; i <= x2; i++) {
        arr[i]++;
    }

    return result;

}

let flag = false;
for (let i = 0; i < n; i++) {
    if (check(segments[i])) {
        flag = true;
        break;
    }
}

if (flag) {
    console.log('Yes');
} else {
    console.log('No');
}