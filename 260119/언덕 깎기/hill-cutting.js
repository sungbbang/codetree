const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const hills = input.slice(1).map(Number);

let ans = Infinity;
for (let h = 0; h <= 100; h++) {
    const min = h;
    const max = h + 17;
    let sum = 0;
    for (let hill of hills) {
        let diff = 0;
        if (hill < min) diff = min - hill;
        else if (hill > max) diff = hill - max;

        sum += diff ** 2;
    }

    ans = Math.min(ans, sum);
}

console.log(ans);