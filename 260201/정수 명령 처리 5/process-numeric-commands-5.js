const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(v => v.split(' '));

const arr = [];
for (let [message, num] of commands) {
    num = Number(num);
    if (message === 'push_back') {
        arr.push(num);
    } else if (message === 'pop_back') {
        arr.pop();
    } else if (message === 'size') {
        console.log(arr.length);
    } else if (message === 'get') {
        console.log(arr[num-1]);
    }
}