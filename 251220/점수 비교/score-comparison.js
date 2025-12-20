const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const a = input[0].split(' ').map(v => Number(v));
const b = input[1].split(' ').map(v => Number(v));

if (a[0] > b[0] && a[1] > b[1]) {
    console.log(1);
} else {
    console.log(0);
}