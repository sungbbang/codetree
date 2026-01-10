const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function isRightTriangle(p1, p2, p3) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;

    // p1이 직각 꼭짓점
    if ((x1 === x2 && y1 === y3) || (x1 === x3 && y1 === y2)) {
        return true;
    }

    // p2가 직각 꼭짓점
    if ((x2 === x1 && y2 === y3) || (x2 === x3 && y2 === y1)) {
        return true;
    }

    // p3가 직각 꼭짓점
    if ((x3 === x1 && y3 === y2) || (x3 === x2 && y3 === y1)) {
        return true;
    }

    return false;
}

function getArea(p1, p2, p3) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    
    const width = Math.max(x1, x2, x3) - Math.min(x1, x2, x3);
    const height = Math.max(y1, y2, y3) - Math.min(y1, y2, y3);
    
    return width * height / 2;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const p1 = points[i];
            const p2 = points[j];
            const p3 = points[k];

            if (isRightTriangle(p1, p2, p3)) {
                ans = Math.max(ans, getArea(p1, p2, p3));
            }
        }
    }
}

console.log(ans * 2);
