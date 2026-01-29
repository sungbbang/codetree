const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let even = 0;
let odd = 0;

for (let i = 0; i < n; i++) {
    if (numbers[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

// 짝수 개수 > 홀수 개수
if (even > odd) {
    console.log(odd * 2 + 1);
}
// 짝수 개수 == 홀수 개수
else if (even === odd) {
    console.log(odd);
}
// 홀수 개수 > 짝수 개수
else {
    let count = even * 2 + Math.floor((odd - even) / 3) * 2;
    let a = (odd - even) % 3;
    if (a === 2) {
        count += 1;
    } else if (a === 1) {
        count -= 1;
    }
    console.log(count);
}