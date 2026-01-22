const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, p] = input[0].split(' ').map(Number);
const messages = input.slice(1, 1 + m).map(line => line.split(' '));

// p번째 이후 메시지 보낸 사람들
const definitelyRead = new Set();
for (let i = p-1; i < m; i++) {
    definitelyRead.add(messages[i][0]);
}

// 안 읽은 가능성 있는 사람들
const maybeNotRead = [];
for (let i = 0; i < n; i++) {
    const person = String.fromCharCode('A'.charCodeAt() + i);
    if (!definitelyRead.has(person)) {
        maybeNotRead.push(person);
    }
}

let notReadCount = Number(messages[p-1][1]);
// p번 메시지를 안 읽은 사람이 0보다 크다면
if (notReadCount > 0) {
    // 안 읽은 사람들이 모두 가능성이 있음
    for (let person of maybeNotRead) {
        process.stdout.write(person + ' ');
    }
}
