const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, M, D, S] = input[0].split(' ').map(Number);

const whoEatCheeseWhen = [];
for (let i = 0; i < D; i++) {
    const [p, cheese, t] = input[i+1].split(' ').map(Number);
    whoEatCheeseWhen.push([p, cheese, t]);
}

const whoSickWhen = [];
for (let i = 0; i < S; i++) {
    const [p, t] = input[i+D+1].split(' ').map(Number);
    whoSickWhen.push([p, t]);
}

function isStale(eat, sick) {
    for (let [eatPerson, eatTime] of eat) {
        for (let [sickPerson, sickTime] of sick) {
            if (eatPerson === sickPerson) {
                if (eatTime >= sickTime) {
                    return false;
                }
            }
        }
    }
    return true;
}

let ans = 0;
// 치즈를 순회(치즈는 1번부터 시작)
for (let i = 1; i <= M; i++) {
    // 치즈 섭취 정보를 순회
    const whoEatCheese = [];
    let lastEatTime = 0;
    for (let [person, cheese, time] of whoEatCheeseWhen) {
        if (cheese === i) {
            whoEatCheese.push([person, time]);
            lastEatTime = Math.max(lastEatTime, time);
        }
    }

    let cnt = 0;
    // 치즈가 상했다면
    if (isStale(whoEatCheese, whoSickWhen)) {
        cnt = whoEatCheese.length;
    }

    ans = Math.max(ans, cnt);
}

console.log(ans);