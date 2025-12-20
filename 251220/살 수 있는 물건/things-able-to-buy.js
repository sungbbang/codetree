const fs = require('fs');

const n = Number(fs.readFileSync(0).toString());

let answer = 'no';

if (n >= 3000) {
    answer = 'book';
} else if (n >= 1000) {
    answer = 'mask';
}

console.log(answer);