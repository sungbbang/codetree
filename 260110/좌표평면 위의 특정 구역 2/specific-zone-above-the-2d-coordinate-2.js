const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n+1).map(line => line.split(' ').map(Number));

let ans = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        temp.push(points[j]);
    }
    
    let maxX = 0;
    let maxY = 0;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER
    for (let [x, y] of temp) {
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
    }

    const area = (maxX - minX) * (maxY - minY);

    ans = Math.min(ans, area);
}

console.log(ans);