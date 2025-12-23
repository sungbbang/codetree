const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
for (let i = 0; i < n; i++) {
    let sum = 0;
    const [a, b] = input[i+1].split(' ').map(Number);

    for (let j = a; j <= b; j++) {
        if (j % 2 == 0) sum += j;
    }

    console.log(sum);
}