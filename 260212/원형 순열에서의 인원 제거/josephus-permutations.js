const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);

const q = Array.from({length: n}, (_, i) => i + 1);

while (q.length > 0) {
    for (let i = 0; i < k; i++) {
        q.push(q.shift());
    }
    
    process.stdout.write(q.pop() + ' ');
}