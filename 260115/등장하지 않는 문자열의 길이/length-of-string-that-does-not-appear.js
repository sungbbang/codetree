const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const str = input[1];

// 문자열 길이가 1일 때부터 n까지 체크
let ans = 0;
for (let i = 1; i <= n; i++) {
    let flag = false;
    for (let j = 0; j <= n-i; j++) {
        const curr = str.slice(j, j+i);
        const remain = str.slice(j+i-1);
        if (remain.includes(curr)) {
            flag = true;
            ans = i;
            break;
        }
    }
    if (!flag) {
        break;
    }
}

console.log(ans+1);