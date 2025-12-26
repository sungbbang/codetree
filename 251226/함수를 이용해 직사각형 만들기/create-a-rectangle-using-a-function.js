const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.
function solution(r, c) {
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            process.stdout.write('1')
        }
        console.log();
    }
}

solution(n, m);