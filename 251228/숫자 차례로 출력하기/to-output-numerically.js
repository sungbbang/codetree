const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

function solution1(n) {
    if (n === 0) return;

    solution1(n-1);
    process.stdout.write(`${n} `);
}

function solution2(n) {
    if (n === 0) return;

    process.stdout.write(`${n} `);
    solution2(n-1);
}

solution1(n);
console.log();
solution2(n);