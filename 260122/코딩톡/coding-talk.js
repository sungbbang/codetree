const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, p] = input[0].split(' ').map(Number);
const messages = input.slice(1).map(v => v.split(' '));


const reads = [];
for (let i = 0; i < m; i++) {
    if (i >= p - 1) {
        reads.push(messages[i][0]);
    }
}

const A = 'A'.charCodeAt();
for (let i = A; i < A + n; i++) {
    let flag = false;
    for (let read of reads) {
        if (read === String.fromCharCode(i)) {
            flag = true;
            break;
        }
    }
    if (flag) {
        continue;
    }
    else {
        process.stdout.write(String.fromCharCode(i) + ' ');
    }
}

