const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, x, y] = input[0].split(' ').map(Number);

// 1. a에서 b로 걷기
const way1 = Math.abs(b - a); // b가 a보다 작은 위치일수도 있으니 절댓값 처리

// 2. a에서 x로 이동 후, y로 순간이동 후 b로 걷기
const way2 = Math.abs(a - x) + Math.abs(b - y);

// 3. a에서 y로 이동 후, x로 순간이동 후 b로 걷기
const way3 = Math.abs(a - y) + Math.abs(b - x);

console.log(Math.min(way1, way2, way3));