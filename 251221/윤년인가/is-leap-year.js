const fs = require('fs');
const y = Number(fs.readFileSync(0).toString());

let yoon = false;
if (y % 4 === 0) {
    yoon = true;
    if (y % 100 === 0 && y % 400 !== 0) {
        yoon = false;
    }
}

console.log(yoon);
