const fs = require('fs');
const [num, age] = fs.readFileSync(0).toString().split('\n').map(v => Number(v));

let person = '';
if (num === 0) {
    if (age >= 19) {
        person = 'MAN';
    } else {
        person = 'BOY';
    }
} else {
    if (age >= 19) {
        person = 'WOMAN';
    } else {
        person = 'GIRL';
    }
}

console.log(person);