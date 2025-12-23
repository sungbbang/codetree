const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

let idx = 'A'.charCodeAt();

for (let i = 0; i < n; i++) {
    result = ''
    for (let j = 0; j < i+1; j++) {
        result += String.fromCharCode(idx);

        if (String.fromCharCode(idx) === 'Z') {
            idx = 'A'.charCodeAt();
        } else idx++;
    }
    console.log(result);
}