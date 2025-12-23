const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

let a = 'A'.charCodeAt();

for (let i = 0; i < n; i++) {
    let result = '';
    for (let j = 0; j < n; j++) {
        result += String.fromCharCode(a++);
    }
    console.log(result);
}