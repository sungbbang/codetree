const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

const condition1 = n % 2 && n % 3 === 0; 
const condition2 = !(n % 2) && n % 5 === 0; 

if (condition1 || condition2) {
    console.log(true);
} else {
    console.log(false);
}