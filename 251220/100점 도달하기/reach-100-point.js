const fs = require('fs');
let score = Number(fs.readFileSync(0).toString().trim());

let result = '';
let grade = 'F';
while (score <= 100) {
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    }
    result += grade + ' ';
    score++;
}

console.log(result);