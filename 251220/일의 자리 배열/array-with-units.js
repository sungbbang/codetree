const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const arr = [a, b];
let result = '';
for (let i = 0; i < 10; i++) {
    if (i <= 1) {
        result += arr[i] + ' ';
    } else {
        arr.push((arr[i-2] + arr[i-1]) % 10);
        result += arr[i] + ' '; 
    }
}

console.log(result);