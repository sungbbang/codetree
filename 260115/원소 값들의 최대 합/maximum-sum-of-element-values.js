const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

let ans = 0;
for (let i = 0; i < n; i++) {
    let startIdx = i;
    let sum = 0;
    const copiedNums = [...nums];
    for (let j = 0; j < m; j++) {
        let startNum = copiedNums[startIdx]; // 시작 위치에 있는 수
        startIdx = startNum - 1;
        sum += startNum;
    }
    ans = Math.max(ans, sum);
}

console.log(ans);