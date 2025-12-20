const fs = require('fs');
const array = fs.readFileSync(0).toString().trim().split(' ');

let result = '';
for (let i = array.length - 1; i >= 0; i--) {
    result += array[i];
}

console.log(result);