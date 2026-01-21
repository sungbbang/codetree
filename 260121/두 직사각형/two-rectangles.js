const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

function isOverlap(rect1, rect2) {
    const [x1, y1, x2, y2] = rect1;
    const [a1, b1, a2, b2] = rect2;

    // 안 겹치는 경우
    // 가로로 배치된 경우
    if (x2 < a1 || a2 < x1) return false;
    // 세로로 배치된 경우
    if (y1 > b2 || b1 > y2 ) return false;

    // 나머지는 겹치는 경우
    return true;
}

if (isOverlap(rect1, rect2)) {
    console.log('overlapping');
} else {
    console.log('nonoverlapping');
}