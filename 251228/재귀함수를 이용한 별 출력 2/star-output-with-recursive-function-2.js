const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

function recursion(n) {
    if (n === 0) return;

    for (let i = n; i > 0; i--) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
    
    recursion(n-1);

    for (let i = 0; i < n; i++) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
}

recursion(n);