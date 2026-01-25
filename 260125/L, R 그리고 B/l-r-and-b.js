const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = 10;
const board = input.slice(0, 10);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// L, B 찾기
let lx, ly, bx, by;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (board[i][j] === 'L') {
            lx = i;
            ly = j;
        }
        if (board[i][j] === 'B') {
            bx = i;
            by = j;
        }
    }
}

const visited = Array.from({ length: n }, () => Array(n).fill(false));
const queue = [];

queue.push([lx, ly, 0]);
visited[lx][ly] = true;

while (queue.length) {
    const [x, y, dist] = queue.shift();

    // 도착
    if (x === bx && y === by) {
        console.log(dist - 1);
        break;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (!inRange(nx, ny)) continue;
        if (visited[nx][ny]) continue;
        if (board[nx][ny] === 'R') continue; // 장애물

        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
    }
}
