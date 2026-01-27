const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

if (arr.length === 1 && arr[0] === 0) {
    console.log(0);
    process.exit();
}

// m이 0인 경우는 사람이 있는 곳마다 설치
if (m === 0) {
    console.log(arr.filter(v => v === 1).length);
    process.exit();
}

// 설치 한번에 다 커버되는 경우
if (m >= Math.floor(n / 2)) {
    console.log(1);
    process.exit();
}

// 설치를 2개 이상해야되는 경우
let cnt = 0;
let i = 0;

while (i < n) {
    if (arr[i] === 1) {
        cnt++;
        i = i + m + m + 1;
    } else {
        i++;
    }
}

console.log(cnt);