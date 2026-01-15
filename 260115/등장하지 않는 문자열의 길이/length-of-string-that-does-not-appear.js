const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const str = input[1];

for (let len = 1; len <= n; len++) {
    let hasDuplicate = false;
    
    for (let j = 0; j <= n - len; j++) {
        const curr = str.slice(j, j + len);
        const nextIndex = str.indexOf(curr, j + 1);
        if (nextIndex !== -1) {
            hasDuplicate = true;
            break;
        }
    }
    
    if (!hasDuplicate) {
        console.log(len);
        process.exit(0);
    }
}