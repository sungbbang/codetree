const fs = require('fs');

const n = Number(fs.readFileSync(0).toString());

let grade = 'F';

if (n >= 90) {
    grade = 'A';
} else if (n >= 80) {
    grade = 'B';
} else if (n >= 70) {
    grade = 'C';
} else if (n >= 60) {
    grade = 'D';
}

console.log(grade);
