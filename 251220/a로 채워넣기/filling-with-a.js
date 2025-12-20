const fs = require('fs');
const s = fs.readFileSync(0).toString().trim();

let result = '';
for (let i = 0; i < s.length; i++) {
    if (i === 1 || i === s.length - 2) {
        result += 'a';
    } else {
        result += s[i];
    }
}

console.log(result);