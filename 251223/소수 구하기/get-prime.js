const fs = require('fs');
const n = Number(fs.readFileSync(0).toString())

let result = '';
for (let i = 2; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= n; j++) {
        if (i % j === 0) {
            cnt++;
        }
    }
    if (cnt == 2) result += i + ' ';
}

console.log(result);