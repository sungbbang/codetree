const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

function isTrue(condition) {
    return condition ? 1 : 0;
}

console.log(isTrue(a >= b));
console.log(isTrue(a > b));
console.log(isTrue(b >= a));
console.log(isTrue(b > a));
console.log(isTrue(a === b));
console.log(isTrue(a !== b));
