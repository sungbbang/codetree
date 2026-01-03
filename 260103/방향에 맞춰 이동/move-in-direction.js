const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
const ds = [[0, 1], [1, 0], [0, -1], [-1, 0]];

let [x, y] = [0, 0];
for (let move of moves) {
    let [dr, dt] = move.split(' ');
    dt = Number(dt)
    if (dr === 'N') {
        x += ds[0][0] * dt;
        y += ds[0][1] * dt;
    } else if (dr === 'E') {
        x += ds[1][0] * dt;
        y += ds[1][1] * dt;
    } else if (dr === 'S') {
        x += ds[2][0] * dt;
        y += ds[2][1] * dt;
    } else {
        x += ds[3][0] * dt;
        y += ds[3][1] * dt;
    }
}

console.log(x, y);