const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);

let ans = Infinity;
for (let maxSpeed = 1; maxSpeed <= x; maxSpeed++) {
    // 최소이동거리
    // 1 -> 1
    // 2 -> 121
    // 3 -> 12321
    let minMoveDistance = maxSpeed ** 2;
    
    // 최소이동거리가 x보다 작아야됨
    if (minMoveDistance < x) {
        ans = Math.min(ans, 2*maxSpeed-1 + x-(maxSpeed ** 2));
    }
}

console.log(ans);