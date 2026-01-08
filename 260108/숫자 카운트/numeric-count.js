const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(row => row.split(' ').map(Number));

function validation(candidate, guess, a, b) {
    const strCandidate = candidate + '';
    const strGuess = guess + '';

    let aCount = 0;
    let bCount = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (strCandidate[i] === strGuess[j]) {
                if (i === j) aCount++;
                else bCount++;
            }
        }
    }

    return aCount === a && bCount === b;

}

const result = [];
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
            // 서로 다른 숫자가 아닌 경우 패스
            if (i == j || j == k || i == k) continue;

            let isValid = true;
            const num = i*100+j*10+k;
            for (let [guess, a, b] of arr) {
                if (!validation(num, guess, a, b)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                result.push(num);
            }
        }
    }
}

console.log(result.length);