const fs = require('fs');
const s = fs.readFileSync(0).toString().trim();

const stack = [];

for (let c of s) {
    if (c === '(') {
        stack.push(c);
    } else {
        if (stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            break;
        }
    }
}

console.log(stack.length === 0 ? 'Yes' : 'No');