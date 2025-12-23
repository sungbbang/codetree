const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < 10; i++) {
    if (arr[i] === 0) break;
    cnt++;
}

let str = '';
for (let i = cnt - 1; i >= 0; i--) {
    str += arr[i] + ' ';
}

console.log(str);
