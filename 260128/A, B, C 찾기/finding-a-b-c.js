const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);
const n = arr.length;
arr.sort((a, b) => a - b);

const max = Math.max(...arr); // a + b + c

let a = 0;
let b = 0;
let c = 0;
for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        for (let k = j+1; k < n; k++) {
            if (arr[i] + arr[j] + arr[k] === max) {
                a = arr[i];
                b = arr[j];
                c = arr[k];
                console.log(a, b, c);
                process.exit();
            }
        }
    }
}