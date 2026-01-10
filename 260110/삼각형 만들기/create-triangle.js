const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function isRightTriangle(p1, p2, p3) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;

    const dot1 = (x2 - x1) * (x3 - x1) + (y2 - y1) * (y3 - y1);
    const dot2 = (x1 - x2) * (x3 - x2) + (y1 - y2) * (y3 - y2);
    const dot3 = (x1 - x3) * (x2 - x3) + (y1 - y3) * (y2 - y3);

    return dot1 === 0 || dot2 === 0 || dot3 === 0;
}

function getArea(p1, p2, p3) {
    const maxX = Math.max(p1[0], p2[0], p3[0]);
    const maxY = Math.max(p1[1], p2[1], p3[1]);
    const minX = Math.min(p1[0], p2[0], p3[0]);
    const minY = Math.min(p1[1], p2[1], p3[1]);

    return (maxX - minX) * (maxY - minY) / 2;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        for (let k = j+1; k < n; k++) {
            const d1 = points[i];
            const d2 = points[j];
            const d3 = points[k];

            if (isRightTriangle(d1, d2, d3)) {
                ans = Math.max(ans, parseInt(getArea(d1, d2, d3)));
            }
        }
    }
}

console.log(ans * 2);
