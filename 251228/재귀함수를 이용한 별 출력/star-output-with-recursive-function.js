const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

function printStar(n) {
    if (n === 0) return;

    printStar(n-1);
    for (let i = 0; i < n; i++) {
        process.stdout.write('*');
    }
    console.log();
}

printStar(n);