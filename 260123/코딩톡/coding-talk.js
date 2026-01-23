const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, p] = input[0].split(' ').map(Number);
const messages = input.slice(1, 1 + m).map(line => line.split(' '));

// 모두 읽은 채팅이라면 읽지 않은 사람은 없음
if (Number(messages[p - 1][1]) === 0) {
    process.exit();
}

const pNotReadCnt = Number(messages[p - 1][1]);

// 각 사람에 대해 채팅을 읽었을지 안 읽었을지 판단
for (let i = 0; i < n; i++) {
    const person = String.fromCharCode('A'.charCodeAt() + i);
    let read = false;

    // 만약 p번 메시지를 읽은 사람 수와 같은 채팅을 기준으로
    // 한번이라도 채팅을 쳤다면 확실하게 채팅을 읽음
    for (let j = 0; j < m; j++) {
        const [sender, notReadCnt] = messages[j];
        if (Number(notReadCnt) >= pNotReadCnt && sender === person) {
            read = true;
            break;
        }
    }

    if (!read) {
        process.stdout.write(person + " ");
    }
}
