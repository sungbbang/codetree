const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

let result = '';
for (let i = n; i <= n * 5; i += n) {
    result += i + ' ';
}

console.log(result);
