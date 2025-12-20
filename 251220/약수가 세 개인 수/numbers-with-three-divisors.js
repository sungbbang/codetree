const fs = require('fs');
const [start, end] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = 0;
for (let i = start; i <= end; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }

        if (count > 3) {
            break;
        }
    }

    if (count === 3) {
        answer++;
    }
}

console.log(answer);