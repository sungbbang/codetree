const fs = require('fs');
const char = fs.readFileSync(0).toString().trim();

const arr = ['apple', 'banana', 'grape', 'blueberry', 'orange'];

let count = 0;
for (let i = 0; i < 5; i++) {
    if (char === arr[i][2] || char === arr[i][3]) {
        console.log(arr[i]);
        count++;
    }
}

console.log(count);
